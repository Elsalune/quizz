webpackJsonp([1],{"11dF":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",{staticClass:"text-orange-dark"},[e._v("Question "+e._s(e.questionNumber))]),n("br"),e._v(" "),n("strong",[e._v(e._s(e.question.text)+" ")]),e._v(" "),n("div",{staticClass:"mt-5"},["tf"===e.question.type?n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.answer,expression:"answer"}],staticClass:"mb-4",attrs:{type:"radio",name:"currentQuestion",id:"trueAnswer",value:"t"},domProps:{checked:e._q(e.answer,"t")},on:{change:function(t){e.answer="t"}}}),n("label",{staticClass:"mx-2",attrs:{for:"trueAnswer"}},[e._v("Vrai")]),n("br"),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.answer,expression:"answer"}],attrs:{type:"radio",name:"currentQuestion",id:"falseAnswer",value:"f"},domProps:{checked:e._q(e.answer,"f")},on:{change:function(t){e.answer="f"}}}),n("label",{staticClass:"mx-2",attrs:{for:"falseAnswer"}},[e._v("Faux")]),n("br")]):e._e(),e._v(" "),"mc"===e.question.type?n("div",e._l(e.question.answers,function(t,s){return n("div",{key:s},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.answer,expression:"answer"}],staticClass:"mb-4",attrs:{type:"radio",id:"answer"+s,name:"currentQuestion"},domProps:{value:t,checked:e._q(e.answer,t)},on:{change:function(n){e.answer=t}}}),n("label",{staticClass:"mx-2",attrs:{for:"answer"+s}},[e._v(e._s(t))]),n("br")])})):e._e(),e._v(" "),n("button",{staticClass:"bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded mt-10",on:{click:e.submitAnswer}},[e._v("Répondre")])])])},staticRenderFns:[]},i={name:"Quiz",components:{Question:n("VU/8")({name:"Question",props:["question","question-number"],data:function(){return{answer:""}},methods:{submitAnswer:function(){this.$emit("answer",{answer:this.answer}),this.answer=null}}},r,!1,null,null,null).exports},props:["url"],data:function(){return{introStage:!1,questionStage:!1,resultsStage:!1,title:"",questions:[],currentQuestion:0,answers:[],correct:0,perc:null}},created:function(){var e=this;fetch(this.url).then(function(e){return e.json()}).then(function(t){e.title=t.title,e.questions=t.questions,e.introStage=!0})},methods:{startQuiz:function(){this.introStage=!1,this.questionStage=!0},handleAnswer:function(e){this.answers[this.currentQuestion]=e.answer,this.currentQuestion+1===this.questions.length?(this.handleResults(),this.questionStage=!1,this.resultsStage=!0):this.currentQuestion++},handleResults:function(){var e=this;this.questions.forEach(function(t,n){e.answers[n]===t.answer&&e.correct++}),this.perc=(this.correct/this.questions.length*100).toFixed(2)}}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.introStage?n("div",[e._t("intro",[n("h1",[e._v("Quizz "+e._s(e.title))])],{title:e.title}),e._v(" "),n("button",{staticClass:"bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded mt-10",attrs:{type:"button"},on:{click:e.startQuiz}},[e._v("Démarrer !")])],2):e._e(),e._v(" "),e.questionStage?n("div",[n("Question",{attrs:{question:e.questions[e.currentQuestion],"question-number":e.currentQuestion+1},on:{answer:e.handleAnswer}})],1):e._e(),e._v(" "),e.resultsStage?n("div",[e._t("results",[e._v("\n    Tu as bien répondu à "+e._s(e.correct)+" questions sur "+e._s(e.questions.length)+", soit "+e._s(e.perc)+"%. Merci !\n    ")],{length:e.questions.length,perc:e.perc,correct:e.correct})],2):e._e()])},staticRenderFns:[]},a={name:"App",components:{Quiz:n("VU/8")(i,o,!1,null,null,null).exports}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Quiz",{attrs:{url:"/static/data.json"},scopedSlots:e._u([{key:"intro",fn:function(t){return n("div",{},[e._v("\n      This is my custom quiz header for "+e._s(t.title)+".\n    ")])}},{key:"results",fn:function(t){return n("div",{},[n("h2",{staticClass:"text-orange mb-3"},[e._v("WOWOWOW!")]),e._v("\n        You got "+e._s(t.correct)+" right out of\n        "+e._s(t.length)+" questions.\n      Your percentage is "+e._s(t.perc)+"%.\n    ")])}}])})],1)},staticRenderFns:[]};var c=n("VU/8")(a,u,!1,function(e){n("11dF")},null,null).exports;s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:c},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.e27c3608c4fae5b7a561.js.map