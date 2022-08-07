"use strict";
exports.id = 181;
exports.ids = [181];
exports.modules = {

/***/ 181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_Education)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@mui/icons-material/School"
var School_ = __webpack_require__(299);
var School_default = /*#__PURE__*/__webpack_require__.n(School_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./pages/components/assets/img/t/etec.png
/* harmony default export */ const etec = ({"src":"/_next/static/media/etec.3904d723.png","height":543,"width":862,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAQAAADSmGXeAAAASElEQVR42gXAuw1AUBQA0HPjVSoRvQ2sINFZ3AY2EI0oFD6FX+Kl1xpNFpcyIXd6dCqzJWGwG60ypyLe8IFGLezJJ2Rum8Mlfrp/Fg8AqAjbAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./pages/components/assets/img/t/unimonte.png
/* harmony default export */ const unimonte = ({"src":"/_next/static/media/unimonte.afb7e87a.png","height":264,"width":960,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATElEQVR4nA3HyQmAMBQE0Bkw4oJH8ZazHdi2TWgPYgFBrMAsf8zxMabsIW0ks4QH0ORc04b3+vZzvRljmgF6ElaKLZJYPZpKGPru+AEmdB9nVuefCAAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./pages/components/assets/img/t/unifesp.png
/* harmony default export */ const unifesp = ({"src":"/_next/static/media/unifesp.54cc1692.png","height":579,"width":960,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAQAAADSmGXeAAAAT0lEQVR42g3BPQ5DABgA0K9jdWiH9gDdqgPhPCJWNj9hFKcQl33hvXDzlSukSv+IUDn0FrPRrgqpxmA0GTR+IdfZ1NdVKwuJl4e3j7un5ARURDGr9v9XAQAAAABJRU5ErkJggg=="});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./pages/components/Education.js










const Education = () => {
  const eduList = [{
    instName: "Etec Dra. Ruth Cardoso",
    inDate: "01/2011",
    outDate: "12/2013",
    type: "High School",
    title: "Graduated",
    logo: etec
  }, {
    instName: "Etec Dra. Ruth Cardoso",
    inDate: "06/2012",
    outDate: "12/2013",
    type: "Technical School",
    title: "Computer Technician",
    logo: etec
  }, {
    instName: "São Judas University - campus Unimonte",
    inDate: "01/2015",
    outDate: "12/2018",
    type: "Biomedicine College",
    title: "Bachelor os Science",
    logo: unimonte
  }, {
    instName: "São Paulo Federal University - campus Baixada Santista",
    inDate: "01/2019",
    outDate: "09/2021",
    type: "Postgraduate College",
    title: "Master in Health Sciences",
    logo: unifesp
  }];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(EducationSuper, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(EducationTitleContainer, {
      children: [" ", /*#__PURE__*/jsx_runtime_.jsx((School_default()), {}), " Education "]
    }), /*#__PURE__*/jsx_runtime_.jsx(EducationContent, {
      children: eduList.map((item, index) => {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)(EducationContainer, {
          backgroundColor: "#fff",
          children: [/*#__PURE__*/jsx_runtime_.jsx(EducationLogo, {
            children: /*#__PURE__*/jsx_runtime_.jsx(LogoWrapper, {
              children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
                src: item.logo,
                alt: "logotipo " + item.instName
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(EducationTitle, {
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "Institution: "
            }), item.instName]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(EducationDescription, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(EducationTimeSpan, {
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "From: "
              }), item.inDate, /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: " to:"
              }), " ", item.outDate]
            }), /*#__PURE__*/jsx_runtime_.jsx(EducationCourse, {
              children: item.type
            }), /*#__PURE__*/jsx_runtime_.jsx(EducationGraduateTitle, {
              children: item.title
            })]
          })]
        }, index + 1);
      })
    })]
  });
};

const EducationSuper = external_styled_components_default().div.withConfig({
  displayName: "Education__EducationSuper",
  componentId: "sc-1x0a9kn-0"
})(["border:1px solid rgba(255,255,255,0.075);padding-top:70px;width:100%;@media (max-width:767px){width:100%;}"]);
const EducationContent = external_styled_components_default().div.withConfig({
  displayName: "Education__EducationContent",
  componentId: "sc-1x0a9kn-1"
})(["display:flex;justify-content:center;align-items:center;flex-direction:row;width:100%;flex-wrap:wrap;margin-top:30px;"]);
const EducationTitleContainer = external_styled_components_default().div.withConfig({
  displayName: "Education__EducationTitleContainer",
  componentId: "sc-1x0a9kn-2"
})(["display:flex;justify-content:center;align-items:center;flex-direction:column;"]);
const EducationContainer = external_styled_components_default().div.withConfig({
  displayName: "Education__EducationContainer",
  componentId: "sc-1x0a9kn-3"
})(["display:flex;flex-direction:column;justify-content:center;width:40%;min-height:300px;height:fit-content;min-height:250px;margin:20px;border:1px solid rgba(255,255,255,0.075);border-radius:20px;padding:20px;transition:all ease-in-out 0.2s;margin-top:0;&:hover{background-color:rgba(255,255,255,0.075);}@media (max-width:767px){width:100%;margin:10px;}"]);
const EducationLogo = external_styled_components_default().div.withConfig({
  displayName: "Education__EducationLogo",
  componentId: "sc-1x0a9kn-4"
})(["width:150px;display:flex;align-items:center;justify-content:center;margin-bottom:10px;"]);
const LogoWrapper = external_styled_components_default().div.withConfig({
  displayName: "Education__LogoWrapper",
  componentId: "sc-1x0a9kn-5"
})([""]);
const EducationTitle = external_styled_components_default().div.withConfig({
  displayName: "Education__EducationTitle",
  componentId: "sc-1x0a9kn-6"
})([""]);
const EducationDescription = external_styled_components_default().div.withConfig({
  displayName: "Education__EducationDescription",
  componentId: "sc-1x0a9kn-7"
})([""]);
const EducationTimeSpan = external_styled_components_default().div.withConfig({
  displayName: "Education__EducationTimeSpan",
  componentId: "sc-1x0a9kn-8"
})([""]);
const EducationCourse = external_styled_components_default().div.withConfig({
  displayName: "Education__EducationCourse",
  componentId: "sc-1x0a9kn-9"
})([""]);
const EducationGraduateTitle = external_styled_components_default().div.withConfig({
  displayName: "Education__EducationGraduateTitle",
  componentId: "sc-1x0a9kn-10"
})([""]);
/* harmony default export */ const components_Education = (Education);

/***/ })

};
;