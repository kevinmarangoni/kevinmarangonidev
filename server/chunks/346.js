"use strict";
exports.id = 346;
exports.ids = [346];
exports.modules = {

/***/ 346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_WorkExperience)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@mui/icons-material/Work"
var Work_ = __webpack_require__(497);
var Work_default = /*#__PURE__*/__webpack_require__.n(Work_);
;// CONCATENATED MODULE: ./pages/components/assets/img/t/orma logo.svg
/* harmony default export */ const orma_logo = ({"src":"/_next/static/media/orma logo.72d0506b.svg","height":32,"width":71});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./pages/components/WorkExperience.js







const WorkSuper = external_styled_components_default().div.withConfig({
  displayName: "WorkExperience__WorkSuper",
  componentId: "sc-z7qqu5-0"
})(["border:1px solid rgba(255,255,255,0.075);padding-top:70px;width:100%;@media (max-width:767px){width:100%;}"]);
const WorkCompanyContainer = external_styled_components_default().div.withConfig({
  displayName: "WorkExperience__WorkCompanyContainer",
  componentId: "sc-z7qqu5-1"
})(["display:flex;justify-content:center;align-items:center;flex-direction:row;width:100%;flex-wrap:wrap;margin-top:30px;"]);
const WorkCompanyCard = external_styled_components_default().div.withConfig({
  displayName: "WorkExperience__WorkCompanyCard",
  componentId: "sc-z7qqu5-2"
})(["display:flex;flex-direction:column;width:40%;height:fit-content;border:1px solid rgba(255,255,255,0.075);&:hover{background-color:rgba(255,255,255,0.075);}@media (max-width:767px){width:100%;margin:10px;}"]);
const WorkCompanyCardLogo = external_styled_components_default().div.withConfig({
  displayName: "WorkExperience__WorkCompanyCardLogo",
  componentId: "sc-z7qqu5-3"
})([""]);
const WorkCompanyCardP = external_styled_components_default().div.withConfig({
  displayName: "WorkExperience__WorkCompanyCardP",
  componentId: "sc-z7qqu5-4"
})([""]);
const WorkCompanyCardSpan = external_styled_components_default().span.withConfig({
  displayName: "WorkExperience__WorkCompanyCardSpan",
  componentId: "sc-z7qqu5-5"
})([""]); // const WorkCompanyNow = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
// const WorkCompanyNowH1 = styled.h1`
//   text-align: center;
//   width: 60%;
//   padding: 10px;
//   background-color: rgba(0, 247, 255, 0.212);
//   border-radius: 10px 10px 0 0;
// `;

const WorkExpTitle = external_styled_components_default().div.withConfig({
  displayName: "WorkExperience__WorkExpTitle",
  componentId: "sc-z7qqu5-6"
})(["display:flex;justify-content:center;align-items:center;flex-direction:column;"]);
const LogoWrapper = external_styled_components_default().div.withConfig({
  displayName: "WorkExperience__LogoWrapper",
  componentId: "sc-z7qqu5-7"
})([""]);

const WorkExperience = () => {
  const workList = [{
    logo: orma_logo,
    companyName: "Orma",
    howLong: "since feb. of 2022",
    description: "Technological Solutions for Sustainability",
    position: "Frontend Web Developer Jr.",
    act: "Develops ReactJs/NextJs applications for the company",
    website: "https://www.orma.eco",
    isCurrent: true
  }];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(WorkSuper, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(WorkExpTitle, {
      children: [/*#__PURE__*/jsx_runtime_.jsx((Work_default()), {}), " Work Experience "]
    }), /*#__PURE__*/jsx_runtime_.jsx(WorkCompanyContainer, {
      children: workList.map((item, index) => {
        return /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(WorkCompanyCard, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(WorkCompanyCardLogo, {
              children: /*#__PURE__*/jsx_runtime_.jsx(LogoWrapper, {
                children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
                  src: item.logo,
                  alt: item.companyName + " logo"
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(WorkCompanyCardP, {
              style: {
                fontWeight: "bolder"
              },
              children: [item.companyName, " - ", item.howLong]
            }), /*#__PURE__*/jsx_runtime_.jsx(WorkCompanyCardSpan, {
              children: item.description
            }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx(WorkCompanyCardP, {
              children: /*#__PURE__*/jsx_runtime_.jsx(WorkCompanyCardSpan, {
                style: {
                  fontWeight: "bolder"
                },
                children: item.position
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(WorkCompanyCardP, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(WorkCompanyCardSpan, {
                style: {
                  fontWeight: "bolder"
                }
              }), item.act]
            }), /*#__PURE__*/jsx_runtime_.jsx(WorkCompanyCardP, {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "https://www.nusa.com.br",
                children: "Website"
              })
            })]
          })
        }, index + 1);
      })
    })]
  });
};

/* harmony default export */ const components_WorkExperience = (WorkExperience);

/***/ })

};
;