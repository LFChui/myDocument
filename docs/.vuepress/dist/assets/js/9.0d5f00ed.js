(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{276:function(a,t,s){"use strict";s.r(t);var n=s(38),e=Object(n.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"react-navigation-4x"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-navigation-4x","aria-hidden":"true"}},[a._v("#")]),a._v(" react-navigation 4X")]),a._v(" "),s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介","aria-hidden":"true"}},[a._v("#")]),a._v(" 简介")]),a._v(" "),s("p",[a._v("react-navigation从发布以来经历了1x，2x，3x的重要变更，现在已经到了4x的阶段，4x相比3x最为重大的变更点如下：")]),a._v(" "),s("p",[a._v("建议，结合react-navigation官方安装文档在借助下面教程进行学习。")]),a._v(" "),s("h2",{attrs:{id:"_4x版本重大特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4x版本重大特性","aria-hidden":"true"}},[a._v("#")]),a._v(" 4x版本重大特性")]),a._v(" "),s("p",[a._v("navigator被拆分到不同的库中")]),a._v(" "),s("h2",{attrs:{id:"_4x版本安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4x版本安装","aria-hidden":"true"}},[a._v("#")]),a._v(" 4x版本安装")]),a._v(" "),s("h3",{attrs:{id:"第一步：-安装主库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一步：-安装主库","aria-hidden":"true"}},[a._v("#")]),a._v(" 第一步： 安装主库")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("  yarn add react-navigation\n")])])]),s("h3",{attrs:{id:"第二步：-安装主库依赖的第三方库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二步：-安装主库依赖的第三方库","aria-hidden":"true"}},[a._v("#")]),a._v(" 第二步： 安装主库依赖的第三方库")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("yarn add react-native-gesture-handler\nyarn add react-native-reanimated\n")])])]),s("h3",{attrs:{id:"第三步：-根据需要引入各导航组件的库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三步：-根据需要引入各导航组件的库","aria-hidden":"true"}},[a._v("#")]),a._v(" 第三步： 根据需要引入各导航组件的库")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("yarn add react-navigation-stack\nyarn add react-navigation-drawer\nyarn add react-navigation-tabs\n")])])]),s("h3",{attrs:{id:"第四步：-执行pod-install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第四步：-执行pod-install","aria-hidden":"true"}},[a._v("#")]),a._v(" 第四步： 执行pod install")]),a._v(" "),s("p",[a._v("为了在iOS上完成安装，还需要执行一些命令：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("cd ios\npod install\ncd ..\n")])])]),s("h3",{attrs:{id:"第五步：-配置react-native-gesture-handler"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第五步：-配置react-native-gesture-handler","aria-hidden":"true"}},[a._v("#")]),a._v(" 第五步： 配置react-native-gesture-handler")]),a._v(" "),s("p",[a._v("为了在Android上能够使react-native-gesture-handler有效，需要修改MainActivity.java：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("reactnavigation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("example")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("facebook"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("react")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ReactActivity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("facebook"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("react")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ReactActivityDelegate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("facebook"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("react")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ReactRootView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("swmansion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("gesturehandler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("react")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RNGestureHandlerEnabledRootView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MainActivity")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ReactActivity")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("protected")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getMainComponentName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Example"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("protected")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ReactActivityDelegate")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("createReactActivityDelegate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ReactActivityDelegate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getMainComponentName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v("      "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v("      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("protected")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ReactRootView")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("createRootView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v("       "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RNGestureHandlerEnabledRootView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MainActivity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v("      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v("    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])},[],!1,null,null,null);t.default=e.exports}}]);