﻿Type.registerNamespace("Sys.Extended.UI.HtmlEditor.ToolbarButtons");Sys.Extended.UI.HtmlEditor.ToolbarButtons.JustifyLeft=function(n){Sys.Extended.UI.HtmlEditor.ToolbarButtons.JustifyLeft.initializeBase(this,[n])};Sys.Extended.UI.HtmlEditor.ToolbarButtons.JustifyLeft.prototype={checkState:function(){return Sys.Extended.UI.HtmlEditor.ToolbarButtons.JustifyLeft.callBaseMethod(this,"checkState")?this._designPanel._textAlignState("left"):!1},callMethod:function(){if(!Sys.Extended.UI.HtmlEditor.ToolbarButtons.JustifyLeft.callBaseMethod(this,"callMethod"))return!1;this._designPanel._execCommand("JustifyLeft")}};Sys.Extended.UI.HtmlEditor.ToolbarButtons.JustifyLeft.registerClass("Sys.Extended.UI.HtmlEditor.ToolbarButtons.JustifyLeft",Sys.Extended.UI.HtmlEditor.ToolbarButtons.EditorToggleButton);