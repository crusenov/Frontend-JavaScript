"use strict";
var _ = require("lodash");

var htmlGenerator = {

    link : function(data) {
      var aTemplate = "<a href = '<%= href %>' title = '<%= title %>'><%= label%></a> ";

      return _.template(aTemplate, data);
    },
    paragraph: function(data) {
      var pTempate = "<p><%= label %></p>";

      return _.template(pTempate, data);
    },
    list: function(data) {
      var listTemplate = "<<%= type %>>  <%= content %> </<%= type %>>";
      var liTemplate = "<li><%= label %> </li>";
      var items = [];

      data.children.forEach(function(child){
        items.push(_.template(liTemplate, child));
      });

      return _.template(listTemplate,{
        type: data.type,
        content: items.join("\n")
      });
    },
    tag: function(data) {

      var attrTemplate = '<%= key %>="<%= value %>"',
          attributes = [],
          tagTemplate = "<<%= tagName %><%= attributes %>><%= content %></<tagName>";

      if(data.attributes){
        attributes.push("");
        data.attributes.forEach(function(attr){
          attributes.push(_.template(attrTemplate, attr));
        });
      }

    return _.template(tagTemplate, {
      tagName: data.tagName,
      content: data.data,
      attributes: attributes.join(" ")
    });
  }
};

var element = htmlGenerator.tag({
    tagName: "div",
    data: htmlGenerator.tag({
        tagName: "h1",
        data: "Hello!"
    }),
    attributes: [{
        key: "class",
        value: "container"
    }, {
        key: "id",
        value: "main-container"
    }]
});
console.log(element);

var link = htmlGenerator.link({
    href: "https://hackbulgaria.com",
    title: "Hack Bulgaria",
    label: "Курсове по Програмиране!"
});
//console.log(link);

var pHtml = htmlGenerator.paragraph({
    label: "Hack Bulgaria"
});
//console.log(pHtml);

var list = htmlGenerator.list({
    type: "ul",
    children: [{
        label: "Item 1"
    }, {
        label: "Item 2"
    }]
});
//console.log(list);


