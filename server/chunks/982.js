"use strict";
exports.id = 982;
exports.ids = [982];
exports.modules = {

/***/ 982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(939);
/* harmony import */ var _mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const SoftSkills = () => {
  const softList = [{
    title: "Resilient",
    description: "“It doesn’t matter how many times you get knocked down. All that matters is you get up one more time than you were knocked down.”",
    quote: "Roy T. Bennett"
  }, {
    title: "Ethical Professional",
    description: "“Educating the mind without educating the heart is no education at all.”",
    quote: "Aristotle"
  }, {
    title: "Positive Attitude",
    description: "Start each day with a positive thought and a grateful heart.",
    quote: "Roy T. Bennett"
  }, {
    title: "Teamwork",
    description: "“Alone we can do so little; together we can do so much”",
    quote: "Helen Keller"
  }, {
    title: "Flexibility",
    description: "“The measure of intelligence is the ability to change.”",
    quote: "Albert Einstein"
  }, {
    title: "Leadership Mindset",
    description: "“To handle yourself, use your head; to handle others, use your heart.”",
    quote: "Eleanor Roosevelt"
  }, {
    title: "Creative",
    description: "“Instead of worrying about what you cannot control, shift your energy to what you can create.”",
    quote: "Roy T. Bennett"
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(SoftskillsSuper, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(SoftskillsTitleContainer, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((_mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_2___default()), {}), " Softskills"]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(SoftskillsContent, {
      children: softList.map((item, index) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(SoftskillCardContainer, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CardTitle, {
            children: item.title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(CardQuote, {
            children: [item.description, " \u2015 ", item.quote]
          })]
        }, index + 1);
      })
    })]
  });
};

const SoftskillsSuper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "SoftSkills__SoftskillsSuper",
  componentId: "sc-104ahym-0"
})(["display:flex;justify-content:center;align-items:center;border:1px solid rgba(255,255,255,0.075);padding-top:70px;width:100vw;flex-wrap:wrap;"]);
const SoftskillCardContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "SoftSkills__SoftskillCardContainer",
  componentId: "sc-104ahym-1"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;flex-wrap:wrap;width:300px;border-radius:20px;border:1px solid rgba(255,255,255,0.075);padding-top:70px;margin:30px;&:hover{background-color:rgba(255,255,255,0.075);}@media (max-width:767px){width:100%;margin:10px;padding:20px;}"]);
const SoftskillsTitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "SoftSkills__SoftskillsTitleContainer",
  componentId: "sc-104ahym-2"
})(["display:flex;justify-content:center;align-items:center;flex-direction:column;"]);
const SoftskillsContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "SoftSkills__SoftskillsContent",
  componentId: "sc-104ahym-3"
})(["display:flex;flex-wrap:wrap;"]);
const CardTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "SoftSkills__CardTitle",
  componentId: "sc-104ahym-4"
})([""]);
const CardQuote = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "SoftSkills__CardQuote",
  componentId: "sc-104ahym-5"
})([""]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SoftSkills);

/***/ })

};
;