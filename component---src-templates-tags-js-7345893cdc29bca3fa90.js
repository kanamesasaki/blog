"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[942],{7198:function(e,t,a){var l=a(7294),n=a(5444);t.Z=function(e){var t,a=e.location,r=e.title,i=e.children,o="/blog/"===a.pathname;return t=o?l.createElement("h1",{className:"main-heading"},l.createElement(n.Link,{to:"/"},r)):l.createElement(n.Link,{className:"header-link-home",to:"/"},r),l.createElement("div",{className:"global-wrapper","data-is-root-path":o},l.createElement("header",{className:"global-header"},t),l.createElement("main",null,i),l.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",l.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))}},5929:function(e,t,a){a.r(t);var l=a(7294),n=a(7198),r=a(5444);t.default=function(e){var t,a=e.pageContext,i=e.data,o=e.location,c=(null===(t=i.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",m=a.tag,s=i.allMarkdownRemark,u=s.edges,d=s.totalCount,h=d+" post"+(1===d?"":"s")+' tagged with "'+m+'"';return l.createElement(n.Z,{location:o,title:c},l.createElement("ol",{style:{listStyle:"none"}},l.createElement("h3",null,h),l.createElement("ul",null,u.map((function(e){var t=e.node,a=t.fields.slug;return l.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h2",null,l.createElement(r.Link,{to:a,itemProp:"url"},l.createElement("span",{itemProp:"headline"},t.frontmatter.title))),l.createElement("small",null,t.frontmatter.date)),l.createElement("section",null,l.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt},itemProp:"description"})))}))),l.createElement(r.Link,{to:"/tags"},"All tags")))}}}]);
//# sourceMappingURL=component---src-templates-tags-js-7345893cdc29bca3fa90.js.map