(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{194:function(e,t,a){"use strict";a.r(t);var s=a(0),o=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.docker.com/products/docker/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.docker.com/products/docker-compose",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Compose"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("p",[e._v("1 - Clone this repository anywhere on your machine:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/gcamrit/docker-homestead.git\n")])])]),a("p",[e._v("2 - Now you have to configure you development environment")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" docker-homestead "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" .env.example .env\n")])])]),a("p",[e._v("3 - "),a("code",[e._v(".env")]),e._v(" contains some configuration you might want to adjust as your need.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# this is what it contains by default feel free to change as you need")]),e._v("\n\nDOCKER_USER"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("homestead   "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# you username of your local machine")]),e._v("\nPROJECT_ROOT"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("~/Projects "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# where you put all you project on your machine")]),e._v("\n\nMYSQL_VERSION"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("5.7 "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# available mysql version are 5.5, 5.6, 5.7")]),e._v("\nMYSQL_DATABASE"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("homestead\nMYSQL_USER"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("homestead\nMYSQL_PASSWORD"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("secret\nMYSQL_ROOT_PASSWORD"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("root\n")])])]),a("p",[e._v("4 - Run Containers: "),a("em",[e._v("(Make sure you are in the "),a("code",[e._v("docker-homestead")]),e._v(" folder before running the "),a("code",[e._v("docker-compose")]),e._v(" commands).")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("docker-compose up -d\n")])])]),a("p",[e._v("5 - As this stack contains nginx all your project configuration file can be created in "),a("code",[e._v("config/sites")]),e._v(" directory.")]),e._v(" "),a("p",[e._v('6 - You must add the "domains" for your Nginx sites to the hosts file on your machine.On Mac and Linux, this file is located at '),a("code",[e._v("/etc/hosts")]),e._v(". On Windows, it is located at  "),a("code",[e._v("C:\\Windows\\System32\\drivers\\etc\\hosts.")]),e._v(" The lines you add to this file will look like the following:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("127.0.0.1  homestead.app\n")])])])])},[],!1,null,null,null);t.default=o.exports}}]);