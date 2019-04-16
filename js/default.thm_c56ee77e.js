window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"Scene_RunningGame":"resource/eui_skins/Scene_RunningGame.exml","Board_Running":"resource/eui_skins/Board_Running.exml","Scene_Bets":"resource/eui_skins/Scene_Bets.exml","NumBubble":"resource/eui_skins/NumBubble.exml","LangList":"resource/eui_skins/LangList.exml","LangList_Unit":"resource/eui_skins/LangList_Unit.exml","BoardTip":"resource/eui_skins/BoardTip.exml","Unit_Bit":"resource/eui_skins/Unit_Bit.exml","BoardTalk":"resource/eui_skins/BoardTalk.exml","BoardFinal":"resource/eui_skins/BoardFinal.exml","Layer_IconSeq":"resource/eui_skins/Layer_IconSeq.exml","BoardRunnerInfo":"resource/eui_skins/BoardRunnerInfo.exml","BoardCommon":"resource/eui_skins/BoardCommon.exml","BoardAdsBidding":"resource/eui_skins/BoardAdsBidding.exml","BoardWaiting":"resource/eui_skins/BoardWaiting.exml"};generateEUI.paths['resource/eui_org/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 38;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_org/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_org/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_org/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_org/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_org/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_org/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_org/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_org/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 4;
		this.elementsContent = [this._Image1_i(),this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "";
		t.width = 4;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Rect();
		this.thumb = t;
		t.enabled = true;
		t.fillAlpha = 0.5;
		t.fillColor = 0xffffff;
		t.height = 30;
		t.strokeAlpha = 0;
		t.width = 4;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_org/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.skinName = "skins.HScrollBarSkin";
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		t.skinName = "skins.VScrollBarSkin";
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_org/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_org/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Board_Running.exml'] = window.Board_RunningSkin = (function (_super) {
	__extends(Board_RunningSkin, _super);
	function Board_RunningSkin() {
		_super.call(this);
		this.skinParts = ["grpYardBg","grpGameBg","mcEndPot","grpBottom","imgAd","board","grpBroadcast","mcF1","grpF1","mcF2","grpF2","mcF3","grpF3","mcF4","grpF4","mcF5","grpF5","mcF6","grpF6","mcF7","grpF7","mcF8","grpF8","grpFront","grpWay1","grpWay2","grpWay3","grpWay4","grpWay5","grpWay6","grpWay7","grpWay8","grpYard","mcCd3","mcCd2","mcCd1","mcCd0","mcCdReady","mcCdGo","grpCountDown"];
		
		this.height = 1242;
		this.width = 4096;
		this.elementsContent = [this.grpYardBg_i(),this.grpGameBg_i(),this.grpBottom_i(),this.grpBroadcast_i(),this.grpFront_i(),this.grpWay1_i(),this.grpWay2_i(),this.grpWay3_i(),this.grpWay4_i(),this.grpWay5_i(),this.grpWay6_i(),this.grpWay7_i(),this.grpWay8_i(),this.grpYard_i(),this.grpCountDown_i()];
	}
	var _proto = Board_RunningSkin.prototype;

	_proto.grpYardBg_i = function () {
		var t = new eui.Group();
		this.grpYardBg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 124;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 112;
		t.x = 0;
		t.y = 616;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.fillMode = "repeat";
		t.source = "yard_bg1_png";
		t.width = 4500;
		t.x = -200;
		t.y = 0;
		return t;
	};
	_proto.grpGameBg_i = function () {
		var t = new eui.Group();
		this.grpGameBg = t;
		t.height = 200;
		t.width = 200;
		t.x = -200;
		t.y = -310.31;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_bg1_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_bg2_jpg";
		t.x = 1024;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_bg1_jpg";
		t.x = 2048;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_bg2_jpg";
		t.x = 3072;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_bg1_jpg";
		t.x = 4096;
		t.y = 0;
		return t;
	};
	_proto.grpBottom_i = function () {
		var t = new eui.Group();
		this.grpBottom = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 569.88;
		t.width = 104;
		t.x = 127.01;
		t.y = 203.51;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this.mcEndPot_i(),this._Image9_i(),this._Image10_i(),this._Rect1_i(),this._Group1_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 562;
		t.source = "game_res_json.start_line";
		t.width = 90.78;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 500.49;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_res_json.running_line";
		t.width = 3668.96;
		t.x = 85.99;
		t.y = 46;
		return t;
	};
	_proto.mcEndPot_i = function () {
		var t = new eui.Image();
		this.mcEndPot = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 542;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_res_json.finish_grid";
		t.width = 153.05;
		t.x = 3745.86;
		t.y = 21.33;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_res_json.finish_word";
		t.visible = false;
		t.x = 2787.86;
		t.y = 119.33;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 129.51;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_res_json.finish_bar2";
		t.visible = false;
		t.width = 59;
		t.x = 3703.86;
		t.y = -64.18;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd30606;
		t.height = 492;
		t.strokeAlpha = 0;
		t.width = 3;
		t.x = 3759;
		t.y = 46;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 489;
		t.x = 131.99;
		t.y = 10.49;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_res_json.board_MN32";
		t.x = 53.22;
		t.y = -91.49;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_res_json.board_MN256";
		t.x = 1470;
		t.y = -99.99999999999999;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_res_json.board_MN1153";
		t.x = 2093;
		t.y = -99.99999999999999;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_res_json.board_MN20k";
		t.x = 2709;
		t.y = -99.99999999999999;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_res_json.board_MN1m";
		t.x = 3389;
		t.y = -99.99999999999999;
		return t;
	};
	_proto.grpBroadcast_i = function () {
		var t = new eui.Group();
		this.grpBroadcast = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 151.18;
		t.width = 929.85;
		t.x = 642.03;
		t.y = 33.87;
		t.elementsContent = [this._Rect2_i(),this.imgAd_i(),this.board_i(),this._Image16_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillColor = 0x333333;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		return t;
	};
	_proto.imgAd_i = function () {
		var t = new eui.Image();
		this.imgAd = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "";
		t.top = 0;
		return t;
	};
	_proto.board_i = function () {
		var t = new eui.Image();
		this.board = t;
		t.anchorOffsetX = 0;
		t.bottom = -33;
		t.left = -40;
		t.right = -77;
		t.scale9Grid = new egret.Rectangle(73,60,223,148);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_res_json.game_board2";
		t.top = -24;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 108.33;
		t.left = -65;
		t.rotation = 360;
		t.source = "game_res_json.game_boardSimbol1";
		t.top = -23;
		t.width = 107.49;
		return t;
	};
	_proto.grpFront_i = function () {
		var t = new eui.Group();
		this.grpFront = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 528;
		t.width = 168;
		t.x = 3115.82;
		t.y = 220.54;
		t.elementsContent = [this._Image17_i(),this.grpF1_i(),this.grpF2_i(),this.grpF3_i(),this.grpF4_i(),this.grpF5_i(),this.grpF6_i(),this.grpF7_i(),this.grpF8_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 599.88;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_res_json.finish_bar1";
		t.visible = false;
		t.width = 82.79;
		t.x = 775.8;
		t.y = -58.58;
		return t;
	};
	_proto.grpF1_i = function () {
		var t = new eui.Group();
		this.grpF1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65.15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 255;
		t.x = 370.04;
		t.y = 29.27000000000001;
		t.elementsContent = [this.mcF1_i()];
		return t;
	};
	_proto.mcF1_i = function () {
		var t = new eui.Image();
		this.mcF1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.rotation = 360;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_res_json.simbol_way_1st";
		t.top = 0;
		return t;
	};
	_proto.grpF2_i = function () {
		var t = new eui.Group();
		this.grpF2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65.15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 255;
		t.x = 370.04;
		t.y = 90;
		t.elementsContent = [this.mcF2_i()];
		return t;
	};
	_proto.mcF2_i = function () {
		var t = new eui.Image();
		this.mcF2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.rotation = 360;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_res_json.simbol_way_1st";
		t.top = 0;
		return t;
	};
	_proto.grpF3_i = function () {
		var t = new eui.Group();
		this.grpF3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65.15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 255;
		t.x = 370.04;
		t.y = 152;
		t.elementsContent = [this.mcF3_i()];
		return t;
	};
	_proto.mcF3_i = function () {
		var t = new eui.Image();
		this.mcF3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.rotation = 360;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_res_json.simbol_way_1st";
		t.top = 0;
		return t;
	};
	_proto.grpF4_i = function () {
		var t = new eui.Group();
		this.grpF4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65.15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 255;
		t.x = 370.04;
		t.y = 214;
		t.elementsContent = [this.mcF4_i()];
		return t;
	};
	_proto.mcF4_i = function () {
		var t = new eui.Image();
		this.mcF4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.rotation = 360;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_res_json.simbol_way_1st";
		t.top = 0;
		return t;
	};
	_proto.grpF5_i = function () {
		var t = new eui.Group();
		this.grpF5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65.15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 255;
		t.x = 370.04;
		t.y = 275;
		t.elementsContent = [this.mcF5_i()];
		return t;
	};
	_proto.mcF5_i = function () {
		var t = new eui.Image();
		this.mcF5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.rotation = 360;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_res_json.simbol_way_1st";
		t.top = 0;
		return t;
	};
	_proto.grpF6_i = function () {
		var t = new eui.Group();
		this.grpF6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65.15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 255;
		t.x = 370.04;
		t.y = 337;
		t.elementsContent = [this.mcF6_i()];
		return t;
	};
	_proto.mcF6_i = function () {
		var t = new eui.Image();
		this.mcF6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.rotation = 360;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_res_json.simbol_way_1st";
		t.top = 0;
		return t;
	};
	_proto.grpF7_i = function () {
		var t = new eui.Group();
		this.grpF7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65.15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 255;
		t.x = 370.04;
		t.y = 398;
		t.elementsContent = [this.mcF7_i()];
		return t;
	};
	_proto.mcF7_i = function () {
		var t = new eui.Image();
		this.mcF7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.rotation = 360;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_res_json.simbol_way_1st";
		t.top = 0;
		return t;
	};
	_proto.grpF8_i = function () {
		var t = new eui.Group();
		this.grpF8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65.15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 255;
		t.x = 370.04;
		t.y = 460.46;
		t.elementsContent = [this.mcF8_i()];
		return t;
	};
	_proto.mcF8_i = function () {
		var t = new eui.Image();
		this.mcF8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.rotation = 360;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_res_json.simbol_way_1st";
		t.top = 0;
		return t;
	};
	_proto.grpWay1_i = function () {
		var t = new eui.Group();
		this.grpWay1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.52;
		t.height = 40.91;
		t.width = 46.97;
		t.x = 59;
		t.y = 271.84;
		return t;
	};
	_proto.grpWay2_i = function () {
		var t = new eui.Group();
		this.grpWay2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.52;
		t.height = 40.91;
		t.width = 46.97;
		t.x = 59;
		t.y = 333.32;
		return t;
	};
	_proto.grpWay3_i = function () {
		var t = new eui.Group();
		this.grpWay3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.52;
		t.height = 40.91;
		t.width = 46.97;
		t.x = 59;
		t.y = 394.32;
		return t;
	};
	_proto.grpWay4_i = function () {
		var t = new eui.Group();
		this.grpWay4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.52;
		t.height = 40.91;
		t.width = 46.97;
		t.x = 59;
		t.y = 455.32;
		return t;
	};
	_proto.grpWay5_i = function () {
		var t = new eui.Group();
		this.grpWay5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.52;
		t.height = 40.91;
		t.width = 46.97;
		t.x = 59;
		t.y = 516.32;
		return t;
	};
	_proto.grpWay6_i = function () {
		var t = new eui.Group();
		this.grpWay6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.52;
		t.height = 40.91;
		t.width = 46.97;
		t.x = 59;
		t.y = 577.32;
		return t;
	};
	_proto.grpWay7_i = function () {
		var t = new eui.Group();
		this.grpWay7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.52;
		t.height = 40.91;
		t.width = 46.97;
		t.x = 59;
		t.y = 638.32;
		return t;
	};
	_proto.grpWay8_i = function () {
		var t = new eui.Group();
		this.grpWay8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 1.52;
		t.height = 40.91;
		t.width = 46.97;
		t.x = 59;
		t.y = 698.84;
		return t;
	};
	_proto.grpYard_i = function () {
		var t = new eui.Group();
		this.grpYard = t;
		t.height = 200;
		t.width = 200;
		t.x = 0;
		t.y = 738.2;
		t.elementsContent = [this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "yard_1_01_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "yard_1_02_png";
		t.x = 1024;
		t.y = 0;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "yard_1_01_png";
		t.x = 1998.2;
		t.y = 0;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = "yard_1_02_png";
		t.x = 3022.2;
		t.y = 0;
		return t;
	};
	_proto.grpCountDown_i = function () {
		var t = new eui.Group();
		this.grpCountDown = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 216;
		t.width = 230;
		t.x = 230;
		t.y = 363.76;
		t.elementsContent = [this.mcCd3_i(),this.mcCd2_i(),this.mcCd1_i(),this.mcCd0_i(),this.mcCdReady_i(),this.mcCdGo_i()];
		return t;
	};
	_proto.mcCd3_i = function () {
		var t = new eui.Image();
		this.mcCd3 = t;
		t.anchorOffsetX = 24;
		t.anchorOffsetY = 34;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_res_json.countdown_3";
		t.verticalCenter = 0;
		return t;
	};
	_proto.mcCd2_i = function () {
		var t = new eui.Image();
		this.mcCd2 = t;
		t.anchorOffsetX = 24;
		t.anchorOffsetY = 34;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_res_json.countdown_2";
		t.verticalCenter = 0;
		return t;
	};
	_proto.mcCd1_i = function () {
		var t = new eui.Image();
		this.mcCd1 = t;
		t.anchorOffsetX = 24;
		t.anchorOffsetY = 34;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_res_json.countdown_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.mcCd0_i = function () {
		var t = new eui.Group();
		this.mcCd0 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image22_i(),this._Image23_i()];
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 18.64;
		t.anchorOffsetY = 26.41;
		t.height = 60.6;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_res_json.countdown_ready";
		t.verticalCenter = -32.5;
		t.width = 188;
		t.y = 72;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 17.66;
		t.anchorOffsetY = 25.01;
		t.height = 64;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_res_json.countdown_go";
		t.verticalCenter = 41;
		t.width = 128;
		t.y = 82;
		return t;
	};
	_proto.mcCdReady_i = function () {
		var t = new eui.Image();
		this.mcCdReady = t;
		t.anchorOffsetX = 18.64;
		t.anchorOffsetY = 26.41;
		t.height = 60.6;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_res_json.countdown_ready";
		t.verticalCenter = 0;
		t.width = 188;
		t.x = 1724;
		return t;
	};
	_proto.mcCdGo_i = function () {
		var t = new eui.Image();
		this.mcCdGo = t;
		t.anchorOffsetX = 17.66;
		t.anchorOffsetY = 25.01;
		t.height = 64;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_res_json.countdown_go";
		t.verticalCenter = 0;
		t.width = 128;
		t.x = 1754;
		return t;
	};
	return Board_RunningSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.percentHeight = 95;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0xffffff;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.alpha = .65;
		t.anchorOffsetX = 0;
		t.fontFamily = "Arial";
		t.percentHeight = 95;
		t.left = 10;
		t.size = 20;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 95;
		t.wordWrap = true;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/BoardAdsBidding.exml'] = window.BoardAdsBiddingSkin = (function (_super) {
	__extends(BoardAdsBiddingSkin, _super);
	function BoardAdsBiddingSkin() {
		_super.call(this);
		this.skinParts = ["bt_close","txtCycleTimes","txtTopBidder","txtTopPlayer","txtTopMoney","txtTimeCountdown","txtBidMoneyInput","txtMoneyUnit","btBid","txtBtnBid","grpBid","txtTitleMySlogan","txtSelfInput","btChange","txtBtnChange","grpWords","txtInfo"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = BoardAdsBiddingSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 702;
		t.horizontalCenter = -2;
		t.verticalCenter = 0.5;
		t.width = 560;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this.bt_close_i(),this.txtCycleTimes_i(),this.txtTopBidder_i(),this.txtTopPlayer_i(),this.txtTopMoney_i(),this.txtTimeCountdown_i(),this.grpBid_i(),this.grpWords_i(),this.txtInfo_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 1;
		t.left = -1;
		t.right = 1;
		t.scale9Grid = new egret.Rectangle(61,79,370,481);
		t.source = "game_res_json.board_bg";
		t.top = -1;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 251;
		t.source = "game_res_json.simbol_area_bg";
		t.width = 453;
		t.x = 51;
		t.y = 67;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 244;
		t.source = "game_res_json.simbol_area_bg";
		t.width = 453;
		t.x = 51;
		t.y = 340;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 130;
		t.left = -35;
		t.source = "game_res_json.board_border_l";
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.left = -68;
		t.source = "game_res_json.board_border_tl";
		t.top = -50;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.right = -55;
		t.source = "game_res_json.board_border_tr";
		t.top = -12;
		return t;
	};
	_proto.bt_close_i = function () {
		var t = new eui.Image();
		this.bt_close = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50.74;
		t.source = "game_res_json.bt_close";
		t.width = 50.99;
		t.x = 510.1;
		t.y = -5.21;
		return t;
	};
	_proto.txtCycleTimes_i = function () {
		var t = new eui.BitmapLabel();
		this.txtCycleTimes = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_fat_white_fnt";
		t.height = 50;
		t.text = "Cycle";
		t.top = 60;
		t.verticalAlign = "middle";
		t.width = 188;
		t.x = 60;
		return t;
	};
	_proto.txtTopBidder_i = function () {
		var t = new eui.BitmapLabel();
		this.txtTopBidder = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_fat_white_fnt";
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Top Bidder";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 432.33;
		t.x = 60;
		t.y = 107.02;
		return t;
	};
	_proto.txtTopPlayer_i = function () {
		var t = new eui.BitmapLabel();
		this.txtTopPlayer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_fat_white_fnt";
		t.height = 40;
		t.horizontalCenter = 0;
		t.scaleX = .8;
		t.scaleY = .8;
		t.text = "runrunrun12  @  111.2222 RUN";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 540.33;
		t.y = 141.02;
		return t;
	};
	_proto.txtTopMoney_i = function () {
		var t = new eui.BitmapLabel();
		this.txtTopMoney = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_fat_white_fnt";
		t.height = 40;
		t.scaleX = .8;
		t.scaleY = .8;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 267.33;
		t.x = 261;
		t.y = 141.02;
		return t;
	};
	_proto.txtTimeCountdown_i = function () {
		var t = new eui.BitmapLabel();
		this.txtTimeCountdown = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_fat_white_fnt";
		t.height = 50;
		t.text = "12:22:00";
		t.textAlign = "left";
		t.top = 60;
		t.verticalAlign = "middle";
		t.width = 148;
		t.x = 363;
		return t;
	};
	_proto.grpBid_i = function () {
		var t = new eui.Group();
		this.grpBid = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 101.79;
		t.width = 422.73;
		t.x = 69.64;
		t.y = 208.67;
		t.elementsContent = [this._Image7_i(),this.txtBidMoneyInput_i(),this.txtMoneyUnit_i(),this.btBid_i(),this.txtBtnBid_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "game_res_json.simbol_input_bg1";
		t.x = 92.34;
		t.y = 2;
		return t;
	};
	_proto.txtBidMoneyInput_i = function () {
		var t = new eui.TextInput();
		this.txtBidMoneyInput = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.horizontalCenter = -41;
		t.maxChars = 20;
		t.restrict = "0-9";
		t.skinName = "skins.TextInputSkin";
		t.textColor = 0xffffff;
		t.top = 6;
		t.width = 136;
		return t;
	};
	_proto.txtMoneyUnit_i = function () {
		var t = new eui.BitmapLabel();
		this.txtMoneyUnit = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_fat_white_fnt";
		t.height = 33;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "RUN";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 92.67;
		t.x = 239;
		t.y = 1.68;
		return t;
	};
	_proto.btBid_i = function () {
		var t = new eui.Image();
		this.btBid = t;
		t.bottom = 6;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(16,5,99,24);
		t.source = "game_res_json.bt_board_stander";
		t.width = 235;
		return t;
	};
	_proto.txtBtnBid_i = function () {
		var t = new eui.BitmapLabel();
		this.txtBtnBid = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_fat_white_fnt";
		t.height = 33;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "BID FOR MY AD";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 230.67;
		t.x = 102;
		t.y = 51.68;
		return t;
	};
	_proto.grpWords_i = function () {
		var t = new eui.Group();
		this.grpWords = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 142;
		t.width = 401;
		t.x = 83;
		t.y = 388;
		t.elementsContent = [this.txtTitleMySlogan_i(),this._Image8_i(),this.txtSelfInput_i(),this.btChange_i(),this.txtBtnChange_i()];
		return t;
	};
	_proto.txtTitleMySlogan_i = function () {
		var t = new eui.BitmapLabel();
		this.txtTitleMySlogan = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_fat_white_fnt";
		t.height = 33;
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "MY SLOGAN";
		t.textAlign = "center";
		t.top = -41;
		t.verticalAlign = "middle";
		t.width = 347.67;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "game_res_json.simbol_input_bg2";
		t.top = 0;
		return t;
	};
	_proto.txtSelfInput_i = function () {
		var t = new eui.TextInput();
		this.txtSelfInput = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.enabled = true;
		t.left = 0;
		t.maxChars = 120;
		t.right = 0;
		t.skinName = "skins.TextInputSkin";
		t.textColor = 0xffffff;
		t.top = 0;
		return t;
	};
	_proto.btChange_i = function () {
		var t = new eui.Image();
		this.btChange = t;
		t.bottom = -52;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(16,5,99,24);
		t.source = "game_res_json.bt_board_stander";
		t.width = 151;
		return t;
	};
	_proto.txtBtnChange_i = function () {
		var t = new eui.BitmapLabel();
		this.txtBtnChange = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_fat_white_fnt";
		t.height = 33;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "CHANGE";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 145.33;
		t.x = 134;
		t.y = 151;
		return t;
	};
	_proto.txtInfo_i = function () {
		var t = new eui.Label();
		this.txtInfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 60;
		t.height = 46.33;
		t.horizontalCenter = 0;
		t.size = 15;
		t.text = "N.B.: ALL TOKENS you bid will be DESTROYED, whether you win the auction or not. Only ad space owner of the current cycle can edit the slogan.";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 425.33;
		t.wordWrap = true;
		return t;
	};
	return BoardAdsBiddingSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/BoardCommon.exml'] = window.BoardCommonSkin = (function (_super) {
	__extends(BoardCommonSkin, _super);
	function BoardCommonSkin() {
		_super.call(this);
		this.skinParts = ["bt_close"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = BoardCommonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 640;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 560;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.bt_close_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(61,79,370,481);
		t.source = "game_res_json.board_bg";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 130;
		t.left = -35;
		t.source = "game_res_json.board_border_l";
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.left = -68;
		t.source = "game_res_json.board_border_tl";
		t.top = -50;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.right = -55;
		t.source = "game_res_json.board_border_tr";
		t.top = -12;
		return t;
	};
	_proto.bt_close_i = function () {
		var t = new eui.Image();
		this.bt_close = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50.74;
		t.source = "game_res_json.bt_close";
		t.width = 50.99;
		t.x = 508.1;
		t.y = 6.79;
		return t;
	};
	return BoardCommonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/BoardContact.exml'] = window.BoardCommonSkin = (function (_super) {
	__extends(BoardCommonSkin, _super);
	function BoardCommonSkin() {
		_super.call(this);
		this.skinParts = ["contact_bt_close","telegram_btn","twitter_btn","medium_btn","gmail_btn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = BoardCommonSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 640;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 560;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.contact_bt_close_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(61,79,370,481);
		t.source = "game_res_json.board_bg";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 635;
		t.left = 371;
		t.source = "game_res_json.contact_board_border_tr";
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.left = -30;
		t.source = "game_res_json.contact_board_border_t";
		t.top = -56;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.right = -34;
		t.source = "game_res_json.contact_board_border_r";
		t.top = -61;
		return t;
	};
	_proto.contact_bt_close_i = function () {
		var t = new eui.Image();
		this.contact_bt_close = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50.74;
		t.source = "game_res_json.bt_close";
		t.width = 50.99;
		t.x = 508.1;
		t.y = 6.79;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 80;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 434;
		t.elementsContent = [this.telegram_btn_i(),this.twitter_btn_i(),this.medium_btn_i(),this.gmail_btn_i()];
		return t;
	};
	_proto.telegram_btn_i = function () {
		var t = new eui.Image();
		this.telegram_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 79;
		t.source = "game_res_json.telegram";
		t.verticalCenter = 0;
		t.width = 80;
		t.x = 10;
		return t;
	};
	_proto.twitter_btn_i = function () {
		var t = new eui.Image();
		this.twitter_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.source = "game_res_json.twitter";
		t.verticalCenter = 0;
		t.width = 80;
		t.x = 120;
		return t;
	};
	_proto.medium_btn_i = function () {
		var t = new eui.Image();
		this.medium_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.source = "game_res_json.medium";
		t.verticalCenter = 0;
		t.width = 80;
		t.x = 230;
		return t;
	};
	_proto.gmail_btn_i = function () {
		var t = new eui.Image();
		this.gmail_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.source = "game_res_json.gmail";
		t.verticalCenter = 0;
		t.width = 80;
		t.x = 340;
		return t;
	};
	return BoardCommonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/BoardDividendsInfo.exml'] = window.BoardCommonSkin = (function (_super) {
	__extends(BoardCommonSkin, _super);
	function BoardCommonSkin() {
		_super.call(this);
		this.skinParts = ["dvidends_bt_close","txt1","txt2","staked_text","txt3","unstaked_text","dvidends_input","txt4","stack_btn","unstack_btn","txt5","txt6","unclaimed_text","claim_all_btn","txt7","txt8","total_text","txt9","countdown_text","txt10","payout","txt11","payout_per","txt12","txt13","mined_today_text","txt14","total_unclaimed_text","claim_all_btn1","dvidends_scroller","btArrawUp","btArrawDown"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group6_i()];
	}
	var _proto = BoardCommonSkin.prototype;

	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 640;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 560;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.dvidends_bt_close_i(),this.dvidends_scroller_i(),this.btArrawUp_i(),this.btArrawDown_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(61,79,370,481);
		t.source = "game_res_json.board_bg";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = -60;
		t.source = "game_res_json.div_board_border_l";
		t.top = -41;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.right = -38;
		t.source = "game_res_json.div_board_border_r";
		t.top = 192;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.left = -59;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_res_json.div_board_border_t";
		t.top = -35;
		t.x = -25;
		t.y = -36.99999999999997;
		return t;
	};
	_proto.dvidends_bt_close_i = function () {
		var t = new eui.Image();
		this.dvidends_bt_close = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50.74;
		t.source = "game_res_json.bt_close";
		t.width = 50.99;
		t.x = 508.1;
		t.y = 6.79;
		return t;
	};
	_proto.dvidends_scroller_i = function () {
		var t = new eui.Scroller();
		this.dvidends_scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 57;
		t.enabled = true;
		t.height = 528;
		t.left = 53;
		t.right = 64;
		t.scrollPolicyH = "off";
		t.skinName = "skins.ScrollerSkin";
		t.top = 63;
		t.viewport = this._Group5_i();
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 910;
		t.width = 446;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Image9_i(),this.txt5_i(),this.txt6_i(),this.unclaimed_text_i(),this._Image10_i(),this.claim_all_btn_i(),this._Group3_i(),this._Image11_i(),this.txt7_i(),this.txt8_i(),this.total_text_i(),this.txt9_i(),this.countdown_text_i(),this.txt10_i(),this.payout_i(),this.txt11_i(),this.payout_per_i(),this._Group4_i(),this._Image12_i(),this.txt12_i(),this.txt13_i(),this.mined_today_text_i(),this.txt14_i(),this.total_unclaimed_text_i(),this._Image13_i(),this.claim_all_btn1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.width = 446;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this.txt1_i(),this.txt2_i(),this.staked_text_i(),this.txt3_i(),this.unstaked_text_i(),this._Image6_i(),this.dvidends_input_i(),this.txt4_i(),this._Image7_i(),this.stack_btn_i(),this._Image8_i(),this.unstack_btn_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 200;
		t.source = "game_res_json.simbol_area_bg";
		t.width = 436;
		t.x = 10;
		t.y = 0;
		return t;
	};
	_proto.txt1_i = function () {
		var t = new eui.BitmapLabel();
		this.txt1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_fat_white_fnt";
		t.height = 50;
		t.text = "Staking";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 446;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txt2_i = function () {
		var t = new eui.BitmapLabel();
		this.txt2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_fat_white_fnt";
		t.height = 40;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.text = "Staked:";
		t.verticalAlign = "top";
		t.width = 180;
		t.x = 40;
		t.y = 60;
		return t;
	};
	_proto.staked_text_i = function () {
		var t = new eui.BitmapLabel();
		this.staked_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_fat_white_fnt";
		t.height = 40;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "0.0000 Run";
		t.verticalAlign = "top";
		t.width = 330;
		t.x = 180;
		t.y = 62;
		return t;
	};
	_proto.txt3_i = function () {
		var t = new eui.BitmapLabel();
		this.txt3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_fat_white_fnt";
		t.height = 40;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.text = "Unstaked:";
		t.verticalAlign = "top";
		t.width = 180;
		t.x = 25;
		t.y = 100;
		return t;
	};
	_proto.unstaked_text_i = function () {
		var t = new eui.BitmapLabel();
		this.unstaked_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_fat_white_fnt";
		t.height = 40;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "0.0000 Run";
		t.verticalAlign = "top";
		t.width = 331;
		t.x = 180;
		t.y = 103;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.source = "game_res_json.simbol_nameBg";
		t.width = 210;
		t.x = 20;
		t.y = 140;
		return t;
	};
	_proto.dvidends_input_i = function () {
		var t = new eui.TextInput();
		this.dvidends_input = t;
		t.enabled = true;
		t.height = 40;
		t.restrict = "0-9.";
		t.skinName = "skins.TextInputSkin";
		t.textColor = 0xffffff;
		t.width = 115;
		t.x = 34;
		t.y = 145;
		return t;
	};
	_proto.txt4_i = function () {
		var t = new eui.BitmapLabel();
		this.txt4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_fat_white_fnt";
		t.height = 40;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.text = "Run";
		t.verticalAlign = "top";
		t.width = 70;
		t.x = 140;
		t.y = 140;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "game_res_json.bt_board_stander";
		t.width = 100;
		t.x = 210;
		t.y = 140;
		return t;
	};
	_proto.stack_btn_i = function () {
		var t = new eui.BitmapLabel();
		this.stack_btn = t;
		t.anchorOffsetX = -10.85;
		t.anchorOffsetY = -6.56;
		t.font = "en_fat_white_fnt";
		t.height = 51.42;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.text = "STAKE";
		t.touchEnabled = true;
		t.verticalAlign = "top";
		t.width = 117.14;
		t.x = 215.8;
		t.y = 140.5;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "game_res_json.bt_board_stander";
		t.width = 119;
		t.x = 316;
		t.y = 140;
		return t;
	};
	_proto.unstack_btn_i = function () {
		var t = new eui.BitmapLabel();
		this.unstack_btn = t;
		t.anchorOffsetX = -10.71;
		t.anchorOffsetY = -4.99;
		t.font = "en_fat_white_fnt";
		t.height = 40;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.text = "UNSTAKE";
		t.touchEnabled = true;
		t.verticalAlign = "top";
		t.width = 150.14;
		t.x = 319.1;
		t.y = 141.5;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 154;
		t.width = 446;
		t.x = 0;
		t.y = 216;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 154;
		t.source = "game_res_json.simbol_area_bg";
		t.width = 436;
		t.x = 10;
		t.y = 216;
		return t;
	};
	_proto.txt5_i = function () {
		var t = new eui.BitmapLabel();
		this.txt5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_fat_white_fnt";
		t.height = 50;
		t.text = "Dividends";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 446;
		t.x = 0;
		t.y = 210;
		return t;
	};
	_proto.txt6_i = function () {
		var t = new eui.BitmapLabel();
		this.txt6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_fat_white_fnt";
		t.height = 40;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.text = "Unclaimed:";
		t.verticalAlign = "top";
		t.width = 180;
		t.x = 30;
		t.y = 270;
		return t;
	};
	_proto.unclaimed_text_i = function () {
		var t = new eui.BitmapLabel();
		this.unclaimed_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_fat_white_fnt";
		t.height = 40;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "0.0000 Eos";
		t.verticalAlign = "top";
		t.width = 315;
		t.x = 190;
		t.y = 272;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 48;
		t.horizontalCenter = 0.5;
		t.source = "game_res_json.bt_board_stander";
		t.width = 180;
		t.y = 310;
		return t;
	};
	_proto.claim_all_btn_i = function () {
		var t = new eui.BitmapLabel();
		this.claim_all_btn = t;
		t.anchorOffsetX = -20;
		t.anchorOffsetY = -5.71;
		t.font = "en_fat_white_fnt";
		t.height = 45.71;
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.text = "CLAIM  ALL";
		t.textAlign = "center";
		t.verticalAlign = "top";
		t.width = 200;
		t.y = 313;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 300;
		t.width = 446;
		t.x = 0;
		t.y = 390;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 300;
		t.source = "game_res_json.simbol_area_bg";
		t.width = 436;
		t.x = 10;
		t.y = 390;
		return t;
	};
	_proto.txt7_i = function () {
		var t = new eui.BitmapLabel();
		this.txt7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_fat_white_fnt";
		t.height = 50;
		t.text = "Payout  Pool";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 446;
		t.x = 0;
		t.y = 390;
		return t;
	};
	_proto.txt8_i = function () {
		var t = new eui.BitmapLabel();
		this.txt8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_fat_white_fnt";
		t.height = 40;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.text = "Total:";
		t.verticalAlign = "top";
		t.width = 180;
		t.x = 40;
		t.y = 450;
		return t;
	};
	_proto.total_text_i = function () {
		var t = new eui.BitmapLabel();
		this.total_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_fat_white_fnt";
		t.height = 40;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "0.0000 Eos";
		t.verticalAlign = "top";
		t.width = 297;
		t.x = 148;
		t.y = 453;
		return t;
	};
	_proto.txt9_i = function () {
		var t = new eui.BitmapLabel();
		this.txt9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_fat_white_fnt";
		t.height = 40;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.text = "Next Payout:";
		t.verticalAlign = "top";
		t.width = 205;
		t.x = 40;
		t.y = 490;
		return t;
	};
	_proto.countdown_text_i = function () {
		var t = new eui.BitmapLabel();
		this.countdown_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_fat_white_fnt";
		t.height = 40;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.text = "00:00";
		t.verticalAlign = "top";
		t.width = 186;
		t.x = 242;
		t.y = 492;
		return t;
	};
	_proto.txt10_i = function () {
		var t = new eui.BitmapLabel();
		this.txt10 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_fat_white_fnt";
		t.height = 40;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.text = "My Estimated Payout";
		t.textAlign = "center";
		t.verticalAlign = "top";
		t.width = 486;
		t.x = 0;
		t.y = 530;
		return t;
	};
	_proto.payout_i = function () {
		var t = new eui.BitmapLabel();
		this.payout = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_fat_white_fnt";
		t.height = 40;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "0.0000 EOS";
		t.textAlign = "center";
		t.verticalAlign = "top";
		t.width = 446;
		t.y = 573;
		return t;
	};
	_proto.txt11_i = function () {
		var t = new eui.BitmapLabel();
		this.txt11 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_fat_white_fnt";
		t.height = 42.22;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.text = "Expected Payout Per 1K RUN";
		t.textAlign = "center";
		t.verticalAlign = "top";
		t.width = 488.22;
		t.x = 0;
		t.y = 610;
		return t;
	};
	_proto.payout_per_i = function () {
		var t = new eui.BitmapLabel();
		this.payout_per = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_fat_white_fnt";
		t.height = 37;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "0.0000 EOS";
		t.textAlign = "center";
		t.verticalAlign = "top";
		t.width = 446;
		t.y = 652;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 282;
		t.width = 446;
		t.x = 0;
		t.y = 710;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 282;
		t.source = "game_res_json.simbol_area_bg";
		t.width = 436;
		t.x = 10;
		t.y = 710;
		return t;
	};
	_proto.txt12_i = function () {
		var t = new eui.BitmapLabel();
		this.txt12 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_fat_white_fnt";
		t.height = 50;
		t.text = "Mining";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 446;
		t.x = 0;
		t.y = 710;
		return t;
	};
	_proto.txt13_i = function () {
		var t = new eui.BitmapLabel();
		this.txt13 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_fat_white_fnt";
		t.height = 40;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.text = "Estimated RUN Mined Today";
		t.textAlign = "center";
		t.verticalAlign = "top";
		t.width = 486;
		t.x = 0;
		t.y = 770;
		return t;
	};
	_proto.mined_today_text_i = function () {
		var t = new eui.BitmapLabel();
		this.mined_today_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_fat_white_fnt";
		t.height = 40;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "0.0000 RUN";
		t.textAlign = "center";
		t.verticalAlign = "top";
		t.width = 446;
		t.y = 810;
		return t;
	};
	_proto.txt14_i = function () {
		var t = new eui.BitmapLabel();
		this.txt14 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_fat_white_fnt";
		t.height = 40;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.text = "Total RUN Unclaimed";
		t.textAlign = "center";
		t.verticalAlign = "top";
		t.width = 486;
		t.x = 0;
		t.y = 850;
		return t;
	};
	_proto.total_unclaimed_text_i = function () {
		var t = new eui.BitmapLabel();
		this.total_unclaimed_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_fat_white_fnt";
		t.height = 40;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "0.0000 RUN";
		t.textAlign = "center";
		t.verticalAlign = "top";
		t.width = 446;
		t.y = 890;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 48;
		t.horizontalCenter = 0.5;
		t.source = "game_res_json.bt_board_stander";
		t.width = 200;
		t.y = 935;
		return t;
	};
	_proto.claim_all_btn1_i = function () {
		var t = new eui.BitmapLabel();
		this.claim_all_btn1 = t;
		t.anchorOffsetX = -20;
		t.anchorOffsetY = -5.71;
		t.font = "en_fat_white_fnt";
		t.height = 45.71;
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.text = "CLAIM  ALL";
		t.textAlign = "center";
		t.verticalAlign = "top";
		t.width = 200;
		t.y = 938;
		return t;
	};
	_proto.btArrawUp_i = function () {
		var t = new eui.Image();
		this.btArrawUp = t;
		t.source = "game_res_json.bt_scrollArraw_up";
		t.x = 467;
		t.y = 56;
		return t;
	};
	_proto.btArrawDown_i = function () {
		var t = new eui.Image();
		this.btArrawDown = t;
		t.source = "game_res_json.bt_scrollArraw_down";
		t.x = 467;
		t.y = 552;
		return t;
	};
	return BoardCommonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/BoardFAQ.exml'] = window.BoardCommonSkin = (function (_super) {
	__extends(BoardCommonSkin, _super);
	function BoardCommonSkin() {
		_super.call(this);
		this.skinParts = ["faq_bt_close","faq_scroller_group","faq_scroller"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = BoardCommonSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 640;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 560;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.faq_bt_close_i(),this.faq_scroller_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(61,79,370,481);
		t.source = "game_res_json.board_bg";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = -35;
		t.source = "game_res_json.faq_board_border_l";
		t.top = -59;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.left = 390;
		t.source = "game_res_json.faq_board_border_t";
		t.top = -50;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.right = -51;
		t.source = "game_res_json.faq_board_border_r";
		t.top = 14;
		return t;
	};
	_proto.faq_bt_close_i = function () {
		var t = new eui.Image();
		this.faq_bt_close = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50.74;
		t.source = "game_res_json.bt_close";
		t.width = 50.99;
		t.x = 508.1;
		t.y = 6.79;
		return t;
	};
	_proto.faq_scroller_i = function () {
		var t = new eui.Scroller();
		this.faq_scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 500;
		t.horizontalCenter = 0;
		t.skinName = "skins.ScrollerSkin";
		t.width = 430;
		t.y = 70;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.faq_scroller_group_i()];
		return t;
	};
	_proto.faq_scroller_group_i = function () {
		var t = new eui.Group();
		this.faq_scroller_group = t;
		t.height = 10000;
		t.width = 430;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return BoardCommonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/BoardFinal.exml'] = window.BoardFinalSkin = (function (_super) {
	__extends(BoardFinalSkin, _super);
	function BoardFinalSkin() {
		_super.call(this);
		this.skinParts = ["potSecond","potFirst","scrollerTalk","grpTalk","txt1sd","txt1","txt2nd","txt2","txtYourInfo","txtCountdown","btClose"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group6_i()];
	}
	var _proto = BoardFinalSkin.prototype;

	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 743;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 640;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.potSecond_i(),this.potFirst_i(),this.grpTalk_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this.btClose_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game_res_json.board_gameEnd";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "game_res_json.simbole_shadow";
		t.x = 127.61;
		t.y = 296.92;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37.44;
		t.source = "game_res_json.simbole_shadow";
		t.width = 110.63;
		t.x = 217.49;
		t.y = 290.11;
		return t;
	};
	_proto.potSecond_i = function () {
		var t = new eui.Group();
		this.potSecond = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33.33;
		t.width = 33.33;
		t.x = 272.11;
		t.y = 309.59;
		return t;
	};
	_proto.potFirst_i = function () {
		var t = new eui.Group();
		this.potFirst = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33.33;
		t.rotation = 0.41;
		t.width = 33.33;
		t.x = 194;
		t.y = 320.63;
		return t;
	};
	_proto.grpTalk_i = function () {
		var t = new eui.Group();
		this.grpTalk = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 146.33;
		t.width = 208;
		t.x = 311;
		t.y = 164;
		t.elementsContent = [this._Image4_i(),this.scrollerTalk_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(58,23,124,93);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_res_json.board_talk";
		t.top = 0;
		return t;
	};
	_proto.scrollerTalk_i = function () {
		var t = new eui.Scroller();
		this.scrollerTalk = t;
		t.enabled = true;
		t.height = 121;
		t.skinName = "skins.ScrollerSkin";
		t.width = 183;
		t.x = 23;
		t.y = 8;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 51.66;
		t.width = 358.67;
		t.x = 141;
		t.y = 383;
		t.elementsContent = [this._BitmapLabel1_i(),this.txt1sd_i(),this.txt1_i()];
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 3.6599999999999966;
		t.font = "en_fat_white_fnt";
		t.scaleX = 1.1;
		t.scaleY = 1.2;
		t.text = "First";
		t.top = 12;
		t.x = 0;
		return t;
	};
	_proto.txt1sd_i = function () {
		var t = new eui.BitmapLabel();
		this.txt1sd = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 3.6599999999999966;
		t.font = "en_fat_white_fnt";
		t.scaleX = 1.1;
		t.scaleY = 1.2;
		t.text = "1sd XXXXX";
		t.top = 12;
		t.x = 170;
		return t;
	};
	_proto.txt1_i = function () {
		var t = new eui.Label();
		this.txt1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "①";
		t.x = 138;
		t.y = 20;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 51.66;
		t.width = 358.67;
		t.x = 141;
		t.y = 452;
		t.elementsContent = [this._BitmapLabel2_i(),this.txt2nd_i(),this.txt2_i()];
		return t;
	};
	_proto._BitmapLabel2_i = function () {
		var t = new eui.BitmapLabel();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.font = "en_fat_white_fnt";
		t.height = 30;
		t.scaleX = 1.1;
		t.scaleY = 1.2;
		t.text = "Second";
		t.top = 5;
		t.width = 211.81;
		t.x = 0;
		return t;
	};
	_proto.txt2nd_i = function () {
		var t = new eui.BitmapLabel();
		this.txt2nd = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.font = "en_fat_white_fnt";
		t.height = 30;
		t.scaleX = 1.1;
		t.scaleY = 1.2;
		t.text = "2nd";
		t.top = 5;
		t.width = 211.81;
		t.x = 170;
		return t;
	};
	_proto.txt2_i = function () {
		var t = new eui.Label();
		this.txt2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "②";
		t.x = 138;
		t.y = 14;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.width = 358.67;
		t.x = 139;
		t.y = 550.33;
		t.elementsContent = [this.txtYourInfo_i()];
		return t;
	};
	_proto.txtYourInfo_i = function () {
		var t = new eui.BitmapLabel();
		this.txtYourInfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_fat_white_fnt";
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "You Won 999999 EOS";
		t.verticalCenter = 0;
		t.x = -139;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.horizontalCenter = 0;
		t.width = 164;
		t.y = 636.33;
		t.elementsContent = [this.txtCountdown_i()];
		return t;
	};
	_proto.txtCountdown_i = function () {
		var t = new eui.BitmapLabel();
		this.txtCountdown = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_fat_white_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.1;
		t.scaleY = 1.4;
		t.text = "00:10";
		t.verticalCenter = 0;
		return t;
	};
	_proto.btClose_i = function () {
		var t = new eui.Image();
		this.btClose = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 68.46;
		t.source = "game_res_json.bt_close";
		t.width = 69.66;
		t.x = 506.33;
		t.y = 40;
		return t;
	};
	return BoardFinalSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/BoardReferral.exml'] = window.BoardCommonSkin = (function (_super) {
	__extends(BoardCommonSkin, _super);
	function BoardCommonSkin() {
		_super.call(this);
		this.skinParts = ["referral_bt_close","copy_btn","referral_url","referral_text"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = BoardCommonSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 640;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 560;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.referral_bt_close_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = -3;
		t.right = 3;
		t.scale9Grid = new egret.Rectangle(61,79,370,481);
		t.source = "game_res_json.board_bg";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 635;
		t.left = 371;
		t.source = "game_res_json.contact_board_border_tr";
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.left = -30;
		t.source = "game_res_json.contact_board_border_t";
		t.top = -56;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.right = -34;
		t.source = "game_res_json.contact_board_border_r";
		t.top = -61;
		return t;
	};
	_proto.referral_bt_close_i = function () {
		var t = new eui.Image();
		this.referral_bt_close = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50.74;
		t.source = "game_res_json.bt_close";
		t.width = 50.99;
		t.x = 508.1;
		t.y = 6.79;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 398.86;
		t.horizontalCenter = 0;
		t.verticalCenter = 44.5;
		t.width = 434;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this.copy_btn_i(),this._Image7_i(),this.referral_url_i(),this.referral_text_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 155;
		t.horizontalCenter = 0;
		t.source = "game_res_json.simbol_area_bg";
		t.top = 0;
		t.width = 450;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42.66;
		t.horizontalCenter = 0;
		t.source = "game_res_json.bt_board_stander";
		t.width = 106.67;
		t.y = 99.33;
		return t;
	};
	_proto.copy_btn_i = function () {
		var t = new eui.BitmapLabel();
		this.copy_btn = t;
		t.anchorOffsetX = -11.81;
		t.anchorOffsetY = -5.95;
		t.font = "en_fat_white_fnt";
		t.height = 47.61;
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.text = "COPY";
		t.textAlign = "center";
		t.verticalAlign = "top";
		t.width = 118.09;
		t.y = 100.83;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57.33;
		t.horizontalCenter = 10;
		t.source = "game_res_json.simbol_nameBg";
		t.width = 494;
		t.y = 29.34;
		return t;
	};
	_proto.referral_url_i = function () {
		var t = new eui.TextInput();
		this.referral_url = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 29.33;
		t.skinName = "skins.TextInputSkin";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.width = 365.66;
		t.x = 28.67;
		t.y = 43.67;
		return t;
	};
	_proto.referral_text_i = function () {
		var t = new eui.Label();
		this.referral_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 215.33;
		t.horizontalCenter = -0.5;
		t.size = 20;
		t.text = "";
		t.width = 447.32;
		t.y = 178;
		return t;
	};
	return BoardCommonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/BoardRunnerInfo.exml'] = window.BoardRunnerInfoSkin = (function (_super) {
	__extends(BoardRunnerInfoSkin, _super);
	function BoardRunnerInfoSkin() {
		_super.call(this);
		this.skinParts = ["btClose","mcShadow","potRunner","txtTalkInfo","grpTalk","txtRunnerName","grpBmpFont"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = BoardRunnerInfoSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 708;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 518;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.btClose_i(),this.mcShadow_i(),this.potRunner_i(),this.grpTalk_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_res_json.board_bg";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = -59;
		t.source = "game_res_json.board_intro_border_tl";
		t.top = -55;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.right = -34;
		t.source = "game_res_json.board_intro_border_tr";
		t.top = -49;
		return t;
	};
	_proto.btClose_i = function () {
		var t = new eui.Image();
		this.btClose = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 69;
		t.right = 0;
		t.source = "game_res_json.bt_close";
		t.top = 0;
		t.width = 69;
		return t;
	};
	_proto.mcShadow_i = function () {
		var t = new eui.Image();
		this.mcShadow = t;
		t.alpha = 0.75;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50.24;
		t.horizontalCenter = 0;
		t.source = "game_res_json.simbole_shadow";
		t.width = 148.46;
		t.y = 510;
		return t;
	};
	_proto.potRunner_i = function () {
		var t = new eui.Group();
		this.potRunner = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 61.33;
		t.horizontalCenter = 32;
		t.width = 64;
		t.y = 534.32;
		return t;
	};
	_proto.grpTalk_i = function () {
		var t = new eui.Group();
		this.grpTalk = t;
		t.height = 182;
		t.width = 307;
		t.x = 120;
		t.y = 136;
		t.elementsContent = [this._Image4_i(),this.txtTalkInfo_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(36,26,217,111);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_res_json.board_talk2";
		t.width = 315;
		t.x = 1;
		t.y = -3.2100000000000364;
		return t;
	};
	_proto.txtTalkInfo_i = function () {
		var t = new eui.Label();
		this.txtTalkInfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 25;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "Great !";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 102;
		t.horizontalCenter = 0;
		t.width = 282;
		t.y = 552;
		t.elementsContent = [this._Image5_i(),this.grpBmpFont_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = -21;
		t.right = -37;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_res_json.simbol_nameBg";
		t.top = 0;
		return t;
	};
	_proto.grpBmpFont_i = function () {
		var t = new eui.Group();
		this.grpBmpFont = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 88;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 258.67;
		t.y = 5;
		t.elementsContent = [this.txtRunnerName_i()];
		return t;
	};
	_proto.txtRunnerName_i = function () {
		var t = new eui.BitmapLabel();
		this.txtRunnerName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_name_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.text = "Byte Master";
		t.verticalCenter = 0;
		return t;
	};
	return BoardRunnerInfoSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/BoardTalk.exml'] = window.BoardTalkSkin = (function (_super) {
	__extends(BoardTalkSkin, _super);
	function BoardTalkSkin() {
		_super.call(this);
		this.skinParts = ["scrollTalkList","txtTitle_chatroom","txtTitle_statistics","txtInput","btPost","scrollRight","mcIconSeq1","mcIconSeq2","grpSeq","grpAll"];
		
		this.height = 212;
		this.width = 640;
		this.elementsContent = [this.grpAll_i()];
	}
	var _proto = BoardTalkSkin.prototype;

	_proto.grpAll_i = function () {
		var t = new eui.Group();
		this.grpAll = t;
		t.anchorOffsetY = 0;
		t.height = 212;
		t.left = 0;
		t.right = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.scrollTalkList_i(),this.txtTitle_chatroom_i(),this.txtTitle_statistics_i(),this.txtInput_i(),this.btPost_i(),this.scrollRight_i(),this.grpSeq_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 260;
		t.scale9Grid = new egret.Rectangle(79,117,481,68);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_res_json.bg_talk";
		t.width = 640;
		t.x = 0;
		t.y = -43;
		return t;
	};
	_proto.scrollTalkList_i = function () {
		var t = new eui.Scroller();
		this.scrollTalkList = t;
		t.height = 80;
		t.width = 330;
		t.x = 60;
		t.y = 68;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		return t;
	};
	_proto.txtTitle_chatroom_i = function () {
		var t = new eui.Label();
		this.txtTitle_chatroom = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.size = 18;
		t.text = "CHAT ROOM";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 274;
		t.x = 86;
		t.y = 26;
		return t;
	};
	_proto.txtTitle_statistics_i = function () {
		var t = new eui.Label();
		this.txtTitle_statistics = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.size = 18;
		t.text = "STATISTICS";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 120;
		t.x = 436;
		t.y = 26;
		return t;
	};
	_proto.txtInput_i = function () {
		var t = new eui.TextInput();
		this.txtInput = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 29.09;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "skins.TextInputSkin";
		t.width = 288.18;
		t.x = 60.48;
		t.y = 154.48;
		return t;
	};
	_proto.btPost_i = function () {
		var t = new eui.Rect();
		this.btPost = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 56.58;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 0;
		t.width = 67.82;
		t.x = 341;
		t.y = 142.68;
		return t;
	};
	_proto.scrollRight_i = function () {
		var t = new eui.Scroller();
		this.scrollRight = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 115;
		t.width = 166;
		t.x = 413;
		t.y = 68;
		t.viewport = this._Group2_i();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		return t;
	};
	_proto.grpSeq_i = function () {
		var t = new eui.Group();
		this.grpSeq = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 117;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 163;
		t.x = 414;
		t.y = 66;
		t.elementsContent = [this._Label1_i(),this._Label2_i(),this.mcIconSeq1_i(),this.mcIconSeq2_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14;
		t.text = "No.1";
		t.x = 6;
		t.y = 3;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14;
		t.text = "No.2";
		t.x = 6;
		t.y = 41;
		return t;
	};
	_proto.mcIconSeq1_i = function () {
		var t = new Layer_IconSeq();
		this.mcIconSeq1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 93;
		t.scaleX = 0.25;
		t.scaleY = 0.25;
		t.width = 668;
		t.x = 1;
		t.y = 16;
		return t;
	};
	_proto.mcIconSeq2_i = function () {
		var t = new Layer_IconSeq();
		this.mcIconSeq2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 93;
		t.scaleX = 0.25;
		t.scaleY = 0.25;
		t.width = 668;
		t.x = 1;
		t.y = 54;
		return t;
	};
	return BoardTalkSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/BoardTip.exml'] = window.BoardTipSkin = (function (_super) {
	__extends(BoardTipSkin, _super);
	function BoardTipSkin() {
		_super.call(this);
		this.skinParts = ["bg","txtTip","grpTip"];
		
		this.height = 300;
		this.width = 640;
		this.elementsContent = [this.grpTip_i()];
	}
	var _proto = BoardTipSkin.prototype;

	_proto.grpTip_i = function () {
		var t = new eui.Group();
		this.grpTip = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 156;
		t.horizontalCenter = 0;
		t.top = 52;
		t.width = 460;
		t.elementsContent = [this.bg_i(),this.txtTip_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(30,37,79,96);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_res_json.game_board";
		t.top = 0;
		return t;
	};
	_proto.txtTip_i = function () {
		var t = new eui.Label();
		this.txtTip = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 103.33;
		t.text = "tip";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 391.33;
		t.x = 28.67;
		t.y = 27;
		return t;
	};
	return BoardTipSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/BoardWaiting.exml'] = window.BoardWaitingSkin = (function (_super) {
	__extends(BoardWaitingSkin, _super);
	function BoardWaitingSkin() {
		_super.call(this);
		this.skinParts = ["txtLoading"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = BoardWaitingSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 269;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 591;
		t.elementsContent = [this._Image1_i(),this.txtLoading_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(61,79,370,481);
		t.source = "game_res_json.board_bg";
		t.top = 0;
		return t;
	};
	_proto.txtLoading_i = function () {
		var t = new eui.BitmapLabel();
		this.txtLoading = t;
		t.anchorOffsetY = 0;
		t.font = "en_fat_white_fnt";
		t.height = 87;
		t.horizontalCenter = 0;
		t.text = "Guinea pigs warming up ;-)";
		t.textAlign = "center";
		t.width = 425;
		t.y = 104;
		return t;
	};
	return BoardWaitingSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LangList_Unit.exml'] = window.LangList_UnitSkin = (function (_super) {
	__extends(LangList_UnitSkin, _super);
	function LangList_UnitSkin() {
		_super.call(this);
		this.skinParts = ["mcBg","txtLang"];
		
		this.height = 29;
		this.width = 154;
		this.elementsContent = [this.mcBg_i(),this.txtLang_i()];
	}
	var _proto = LangList_UnitSkin.prototype;

	_proto.mcBg_i = function () {
		var t = new eui.Rect();
		this.mcBg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 2;
		t.fillColor = 0xe8e8e8;
		t.left = 0;
		t.right = 0;
		t.top = 2;
		return t;
	};
	_proto.txtLang_i = function () {
		var t = new eui.Label();
		this.txtLang = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.text = "Label";
		t.textAlign = "left";
		t.textColor = 0x232323;
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	return LangList_UnitSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LangList.exml'] = window.LangListSkin = (function (_super) {
	__extends(LangListSkin, _super);
	function LangListSkin() {
		_super.call(this);
		this.skinParts = ["scroller"];
		
		this.height = 261;
		this.width = 338;
		this.elementsContent = [this.scroller_i()];
	}
	var _proto = LangListSkin.prototype;

	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.height = 200;
		t.width = 200;
		t.x = 62;
		t.y = 24;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		return t;
	};
	return LangListSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Layer_HistoryList.exml'] = window.Layer_HistoryListSkin = (function (_super) {
	__extends(Layer_HistoryListSkin, _super);
	function Layer_HistoryListSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 176;
		this.width = 227;
	}
	var _proto = Layer_HistoryListSkin.prototype;

	return Layer_HistoryListSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Layer_HistoryUnit.exml'] = window.Layer_HistoryUnitSkin = (function (_super) {
	__extends(Layer_HistoryUnitSkin, _super);
	function Layer_HistoryUnitSkin() {
		_super.call(this);
		this.skinParts = ["txtSeq","txtNum"];
		
		this.height = 24.3;
		this.width = 165;
		this.elementsContent = [this.txtSeq_i(),this.txtNum_i()];
	}
	var _proto = Layer_HistoryUnitSkin.prototype;

	_proto.txtSeq_i = function () {
		var t = new eui.Label();
		this.txtSeq = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22.03;
		t.size = 14;
		t.text = "No.21006";
		t.textAlign = "left";
		t.verticalAlign = "top";
		t.width = 79.12;
		t.x = 3;
		t.y = 4;
		return t;
	};
	_proto.txtNum_i = function () {
		var t = new eui.Label();
		this.txtNum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 23.09;
		t.size = 14;
		t.text = "1st 1 1 2nd 6";
		t.textAlign = "center";
		t.verticalAlign = "top";
		t.width = 97.76;
		t.x = 68;
		t.y = 4;
		return t;
	};
	return Layer_HistoryUnitSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Layer_IconSeq.exml'] = window.Layer_IconSeqSkin = (function (_super) {
	__extends(Layer_IconSeqSkin, _super);
	function Layer_IconSeqSkin() {
		_super.call(this);
		this.skinParts = ["Icon1","Icon2","Icon3","Icon4","Icon5","Icon6","Icon7","Icon8"];
		
		this.height = 90.43;
		this.width = 653.06;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = Layer_IconSeqSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.Icon1_i(),this.Icon2_i(),this.Icon3_i(),this.Icon4_i(),this.Icon5_i(),this.Icon6_i(),this.Icon7_i(),this.Icon8_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this._Label8_i()];
		return t;
	};
	_proto.Icon1_i = function () {
		var t = new eui.Image();
		this.Icon1 = t;
		t.source = "game_res_json.simbol_bitFocus";
		t.x = 3;
		t.y = 4;
		return t;
	};
	_proto.Icon2_i = function () {
		var t = new eui.Image();
		this.Icon2 = t;
		t.source = "game_res_json.simbol_bitFocus";
		t.x = 83;
		t.y = 4;
		return t;
	};
	_proto.Icon3_i = function () {
		var t = new eui.Image();
		this.Icon3 = t;
		t.source = "game_res_json.simbol_bitFocus";
		t.x = 163;
		t.y = 4;
		return t;
	};
	_proto.Icon4_i = function () {
		var t = new eui.Image();
		this.Icon4 = t;
		t.source = "game_res_json.simbol_bitFocus";
		t.x = 243;
		t.y = 4;
		return t;
	};
	_proto.Icon5_i = function () {
		var t = new eui.Image();
		this.Icon5 = t;
		t.source = "game_res_json.simbol_bitFocus";
		t.x = 323;
		t.y = 4;
		return t;
	};
	_proto.Icon6_i = function () {
		var t = new eui.Image();
		this.Icon6 = t;
		t.source = "game_res_json.simbol_bitFocus";
		t.x = 403;
		t.y = 4;
		return t;
	};
	_proto.Icon7_i = function () {
		var t = new eui.Image();
		this.Icon7 = t;
		t.source = "game_res_json.simbol_bitFocus";
		t.x = 483;
		t.y = 4;
		return t;
	};
	_proto.Icon8_i = function () {
		var t = new eui.Image();
		this.Icon8 = t;
		t.source = "game_res_json.simbol_bitFocus";
		t.x = 563.02;
		t.y = 4;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 50;
		t.text = "1";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 27.66;
		t.y = 21.34;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 50;
		t.text = "2";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 108;
		t.y = 21.34;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 50;
		t.text = "3";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 188;
		t.y = 21.34;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 50;
		t.text = "4";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 269;
		t.y = 21.34;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.size = 50;
		t.text = "5";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 349;
		t.y = 21.34;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.size = 50;
		t.text = "6";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 430;
		t.y = 21.34;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.size = 50;
		t.text = "7";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 510;
		t.y = 21.34;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.size = 50;
		t.text = "8";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 590.34;
		t.y = 21.34;
		return t;
	};
	return Layer_IconSeqSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/NumBubble.exml'] = window.NumBubbleSkin = (function (_super) {
	__extends(NumBubbleSkin, _super);
	function NumBubbleSkin() {
		_super.call(this);
		this.skinParts = ["imgR","imgL","txtNum","grp"];
		
		this.height = 120;
		this.width = 120;
		this.elementsContent = [this.grp_i()];
	}
	var _proto = NumBubbleSkin.prototype;

	_proto.grp_i = function () {
		var t = new eui.Group();
		this.grp = t;
		t.anchorOffsetX = -1;
		t.height = 120;
		t.width = 120;
		t.elementsContent = [this.imgR_i(),this.imgL_i(),this.txtNum_i()];
		return t;
	};
	_proto.imgR_i = function () {
		var t = new eui.Image();
		this.imgR = t;
		t.rotation = 355.13;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_res_json.bubble";
		t.x = -5;
		t.y = 8;
		return t;
	};
	_proto.imgL_i = function () {
		var t = new eui.Image();
		this.imgL = t;
		t.rotation = 2.11;
		t.scaleX = -1;
		t.scaleY = 1;
		t.source = "game_res_json.bubble";
		t.x = 118;
		t.y = 3;
		return t;
	};
	_proto.txtNum_i = function () {
		var t = new eui.Label();
		this.txtNum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 53;
		t.text = "1";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 81;
		t.x = 18;
		t.y = 26;
		return t;
	};
	return NumBubbleSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Scene_Bets.exml'] = window.Scene_BetsSkin = (function (_super) {
	__extends(Scene_BetsSkin, _super);
	var Scene_BetsSkin$Skin1 = 	(function (_super) {
		__extends(Scene_BetsSkin$Skin1, _super);
		function Scene_BetsSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","game_res_json.tm_bt_f")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","game_res_json.tm_bt_f")
					])
			];
		}
		var _proto = Scene_BetsSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "game_res_json.tm_bt_d";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Scene_BetsSkin$Skin1;
	})(eui.Skin);

	function Scene_BetsSkin() {
		_super.call(this);
		this.skinParts = ["grpShadow","grpRunner1","grpRunner2","grpRunner3","grpRunner4","grpRunner5","grpRunner6","grpRunner7","grpRunner8","grpPlayer","txtTimeCountDown","bt_bit1","bt_bit5","bt_bit20","btBitReset","focus1","focus5","focus20","bt_start","txtBitInfo","grpBets","grpWin1","grpWin2","grpWin3","grpWin4","grpWin5","grpWin6","grpWin7","grpWin8","grpChoice1st","grpFront1_2","grpFront1_3","grpFront1_4","grpFront1_5","grpFront1_6","grpFront1_7","grpFront1_8","grpFront2_3","grpFront2_4","grpFront2_5","grpFront2_6","grpFront2_7","grpFront2_8","grpFront3_4","grpFront3_5","grpFront3_6","grpFront3_7","grpFront3_8","grpFront4_5","grpFront4_6","grpFront4_7","grpFront4_8","grpFront5_6","grpFront5_7","grpFront5_8","grpFront6_7","grpFront6_8","grpFront7_8","grpChoice1st0","grpTalk","bt_tm","txtAdsBidding","txtDividends","txtReferral","txtFAQ","txtContact","bt_adword","bt_getBonus","bt_referral","bt_help","bt_contact","grpTopMenu_SubMenu","grpTopMenu"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.grpPlayer_i(),this.grpBets_i(),this.grpChoice1st_i(),this.grpChoice1st0_i(),this.grpTalk_i(),this.grpTopMenu_i()];
	}
	var _proto = Scene_BetsSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.source = "bg_bit_jpg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bg_bitGrid_png";
		t.top = 274;
		return t;
	};
	_proto.grpPlayer_i = function () {
		var t = new eui.Group();
		this.grpPlayer = t;
		t.anchorOffsetY = 0;
		t.height = 150.67;
		t.horizontalCenter = 0;
		t.top = 108;
		t.width = 640;
		t.elementsContent = [this.grpShadow_i(),this.grpRunner1_i(),this.grpRunner2_i(),this.grpRunner3_i(),this.grpRunner4_i(),this.grpRunner5_i(),this.grpRunner6_i(),this.grpRunner7_i(),this.grpRunner8_i(),this._Image11_i()];
		return t;
	};
	_proto.grpShadow_i = function () {
		var t = new eui.Group();
		this.grpShadow = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.width = 633;
		t.x = 7;
		t.y = 69;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.alpha = .55;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24.24;
		t.source = "game_res_json.simbole_shadow";
		t.width = 71.63;
		t.x = 4.49;
		t.y = 6;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.alpha = 0.55;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24.24;
		t.source = "game_res_json.simbole_shadow";
		t.width = 71.63;
		t.x = 84.49;
		t.y = 6;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.alpha = 0.55;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24.24;
		t.source = "game_res_json.simbole_shadow";
		t.width = 71.63;
		t.x = 168.49;
		t.y = 6;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.alpha = 0.55;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24.24;
		t.source = "game_res_json.simbole_shadow";
		t.width = 71.63;
		t.x = 246.49;
		t.y = 6;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.alpha = 0.55;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24.24;
		t.source = "game_res_json.simbole_shadow";
		t.width = 71.63;
		t.x = 331.49;
		t.y = 6;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.alpha = 0.55;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24.24;
		t.source = "game_res_json.simbole_shadow";
		t.width = 71.63;
		t.x = 409.49;
		t.y = 6;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.alpha = 0.55;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24.24;
		t.source = "game_res_json.simbole_shadow";
		t.width = 71.63;
		t.x = 479.49;
		t.y = 6;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.alpha = 0.55;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24.24;
		t.source = "game_res_json.simbole_shadow";
		t.width = 71.63;
		t.x = 561.49;
		t.y = 6;
		return t;
	};
	_proto.grpRunner1_i = function () {
		var t = new eui.Group();
		this.grpRunner1 = t;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 64;
		t.height = 64;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 64;
		t.x = 46.3;
		t.y = 86.84;
		return t;
	};
	_proto.grpRunner2_i = function () {
		var t = new eui.Group();
		this.grpRunner2 = t;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 64;
		t.height = 64;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 64;
		t.x = 132.65;
		t.y = 86.84;
		return t;
	};
	_proto.grpRunner3_i = function () {
		var t = new eui.Group();
		this.grpRunner3 = t;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 64;
		t.height = 64;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 64;
		t.x = 211.66;
		t.y = 87.84;
		return t;
	};
	_proto.grpRunner4_i = function () {
		var t = new eui.Group();
		this.grpRunner4 = t;
		t.anchorOffsetX = 33;
		t.anchorOffsetY = 64;
		t.height = 64;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 64;
		t.x = 292.33;
		t.y = 86.84;
		return t;
	};
	_proto.grpRunner5_i = function () {
		var t = new eui.Group();
		this.grpRunner5 = t;
		t.anchorOffsetX = 33;
		t.anchorOffsetY = 62;
		t.height = 64;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 64;
		t.x = 374.33;
		t.y = 84.84;
		return t;
	};
	_proto.grpRunner6_i = function () {
		var t = new eui.Group();
		this.grpRunner6 = t;
		t.anchorOffsetX = 31;
		t.anchorOffsetY = 64;
		t.height = 64;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 64;
		t.x = 450.31;
		t.y = 86.84;
		return t;
	};
	_proto.grpRunner7_i = function () {
		var t = new eui.Group();
		this.grpRunner7 = t;
		t.anchorOffsetX = 34;
		t.anchorOffsetY = 64;
		t.height = 64;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 64;
		t.x = 527.33;
		t.y = 86.84;
		return t;
	};
	_proto.grpRunner8_i = function () {
		var t = new eui.Group();
		this.grpRunner8 = t;
		t.anchorOffsetX = 33;
		t.anchorOffsetY = 64;
		t.height = 64;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 64;
		t.x = 602.65;
		t.y = 86.84;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 14.53;
		t.horizontalCenter = -4;
		t.source = "game_res_json.rats_names";
		t.width = 620.25;
		t.y = 97.94;
		return t;
	};
	_proto.grpBets_i = function () {
		var t = new eui.Group();
		this.grpBets = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 161.88;
		t.horizontalCenter = 0;
		t.top = 598;
		t.width = 640;
		t.elementsContent = [this._Image12_i(),this.txtTimeCountDown_i(),this.bt_bit1_i(),this.bt_bit5_i(),this.bt_bit20_i(),this.btBitReset_i(),this.focus1_i(),this.focus5_i(),this.focus20_i(),this.bt_start_i(),this._Group1_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "game_res_json.bg_bitsFloat";
		t.x = -2;
		t.y = 0;
		return t;
	};
	_proto.txtTimeCountDown_i = function () {
		var t = new eui.BitmapLabel();
		this.txtTimeCountDown = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_time_fnt";
		t.height = 88.2;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "01:50";
		t.width = 238.83;
		t.x = 42;
		t.y = 93;
		return t;
	};
	_proto.bt_bit1_i = function () {
		var t = new eui.Image();
		this.bt_bit1 = t;
		t.source = "game_res_json.bt_bit1";
		t.x = 24;
		t.y = 162;
		return t;
	};
	_proto.bt_bit5_i = function () {
		var t = new eui.Image();
		this.bt_bit5 = t;
		t.source = "game_res_json.bt_bit5";
		t.x = 96;
		t.y = 162;
		return t;
	};
	_proto.bt_bit20_i = function () {
		var t = new eui.Image();
		this.bt_bit20 = t;
		t.source = "game_res_json.bt_bit20";
		t.x = 168;
		t.y = 162;
		return t;
	};
	_proto.btBitReset_i = function () {
		var t = new eui.Image();
		this.btBitReset = t;
		t.source = "game_res_json.bt_bitReset";
		t.x = 242;
		t.y = 159;
		return t;
	};
	_proto.focus1_i = function () {
		var t = new eui.Image();
		this.focus1 = t;
		t.source = "game_res_json.simbol_bitFocus";
		t.x = 20;
		t.y = 157.99;
		return t;
	};
	_proto.focus5_i = function () {
		var t = new eui.Image();
		this.focus5 = t;
		t.source = "game_res_json.simbol_bitFocus";
		t.x = 91.33;
		t.y = 158.65;
		return t;
	};
	_proto.focus20_i = function () {
		var t = new eui.Image();
		this.focus20 = t;
		t.source = "game_res_json.simbol_bitFocus";
		t.x = 160.33;
		t.y = 157.67;
		return t;
	};
	_proto.bt_start_i = function () {
		var t = new eui.Image();
		this.bt_start = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game_res_json.bt_go";
		t.x = 384;
		t.y = 234;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 51;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 348;
		t.x = 26;
		t.y = 240;
		t.elementsContent = [this.txtBitInfo_i()];
		return t;
	};
	_proto.txtBitInfo_i = function () {
		var t = new eui.BitmapLabel();
		this.txtBitInfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "en_fat_white_fnt";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.text = "Bet Amount 20 Eos,   5000EOS";
		t.verticalCenter = 0;
		t.width = 484.83;
		t.x = 4;
		return t;
	};
	_proto.grpChoice1st_i = function () {
		var t = new eui.Group();
		this.grpChoice1st = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.top = 323;
		t.width = 640;
		t.elementsContent = [this.grpWin1_i(),this.grpWin2_i(),this.grpWin3_i(),this.grpWin4_i(),this.grpWin5_i(),this.grpWin6_i(),this.grpWin7_i(),this.grpWin8_i()];
		return t;
	};
	_proto.grpWin1_i = function () {
		var t = new eui.Group();
		this.grpWin1 = t;
		t.height = 79;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 73;
		t.x = 18;
		t.y = 7;
		t.elementsContent = [this._Rect1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf2ca43;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grpWin2_i = function () {
		var t = new eui.Group();
		this.grpWin2 = t;
		t.height = 79;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 73;
		t.x = 94;
		t.y = 7;
		t.elementsContent = [this._Rect2_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf2ca43;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grpWin3_i = function () {
		var t = new eui.Group();
		this.grpWin3 = t;
		t.height = 79;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 73;
		t.x = 170;
		t.y = 7;
		t.elementsContent = [this._Rect3_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf2ca43;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grpWin4_i = function () {
		var t = new eui.Group();
		this.grpWin4 = t;
		t.height = 79;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 73;
		t.x = 245;
		t.y = 7;
		t.elementsContent = [this._Rect4_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf2ca43;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grpWin5_i = function () {
		var t = new eui.Group();
		this.grpWin5 = t;
		t.height = 79;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 73;
		t.x = 321;
		t.y = 7;
		t.elementsContent = [this._Rect5_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf2ca43;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grpWin6_i = function () {
		var t = new eui.Group();
		this.grpWin6 = t;
		t.height = 79;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 73;
		t.x = 397;
		t.y = 7;
		t.elementsContent = [this._Rect6_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf2ca43;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grpWin7_i = function () {
		var t = new eui.Group();
		this.grpWin7 = t;
		t.height = 79;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 73;
		t.x = 472;
		t.y = 7;
		t.elementsContent = [this._Rect7_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf2ca43;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grpWin8_i = function () {
		var t = new eui.Group();
		this.grpWin8 = t;
		t.height = 79;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 73;
		t.x = 547.64;
		t.y = 7;
		t.elementsContent = [this._Rect8_i()];
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf2ca43;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grpChoice1st0_i = function () {
		var t = new eui.Group();
		this.grpChoice1st0 = t;
		t.anchorOffsetY = 0;
		t.height = 263.33;
		t.horizontalCenter = 0;
		t.top = 425;
		t.width = 640;
		t.elementsContent = [this.grpFront1_2_i(),this.grpFront1_3_i(),this.grpFront1_4_i(),this.grpFront1_5_i(),this.grpFront1_6_i(),this.grpFront1_7_i(),this.grpFront1_8_i(),this.grpFront2_3_i(),this.grpFront2_4_i(),this.grpFront2_5_i(),this.grpFront2_6_i(),this.grpFront2_7_i(),this.grpFront2_8_i(),this.grpFront3_4_i(),this.grpFront3_5_i(),this.grpFront3_6_i(),this.grpFront3_7_i(),this.grpFront3_8_i(),this.grpFront4_5_i(),this.grpFront4_6_i(),this.grpFront4_7_i(),this.grpFront4_8_i(),this.grpFront5_6_i(),this.grpFront5_7_i(),this.grpFront5_8_i(),this.grpFront6_7_i(),this.grpFront6_8_i(),this.grpFront7_8_i()];
		return t;
	};
	_proto.grpFront1_2_i = function () {
		var t = new eui.Group();
		this.grpFront1_2 = t;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 82;
		t.x = 22;
		t.y = 49;
		t.elementsContent = [this._Rect9_i()];
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf2ca43;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grpFront1_3_i = function () {
		var t = new eui.Group();
		this.grpFront1_3 = t;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 82;
		t.x = 107;
		t.y = 49;
		t.elementsContent = [this._Rect10_i()];
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf2ca43;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grpFront1_4_i = function () {
		var t = new eui.Group();
		this.grpFront1_4 = t;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 82;
		t.x = 193;
		t.y = 49;
		t.elementsContent = [this._Rect11_i()];
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf2ca43;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grpFront1_5_i = function () {
		var t = new eui.Group();
		this.grpFront1_5 = t;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 82;
		t.x = 278;
		t.y = 49;
		t.elementsContent = [this._Rect12_i()];
		return t;
	};
	_proto._Rect12_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf2ca43;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grpFront1_6_i = function () {
		var t = new eui.Group();
		this.grpFront1_6 = t;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 82;
		t.x = 363;
		t.y = 49;
		t.elementsContent = [this._Rect13_i()];
		return t;
	};
	_proto._Rect13_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf2ca43;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grpFront1_7_i = function () {
		var t = new eui.Group();
		this.grpFront1_7 = t;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 82;
		t.x = 449;
		t.y = 49;
		t.elementsContent = [this._Rect14_i()];
		return t;
	};
	_proto._Rect14_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf2ca43;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grpFront1_8_i = function () {
		var t = new eui.Group();
		this.grpFront1_8 = t;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 82;
		t.x = 534;
		t.y = 49;
		t.elementsContent = [this._Rect15_i()];
		return t;
	};
	_proto._Rect15_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf2ca43;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grpFront2_3_i = function () {
		var t = new eui.Group();
		this.grpFront2_3 = t;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 82;
		t.x = 106;
		t.y = 107;
		t.elementsContent = [this._Rect16_i()];
		return t;
	};
	_proto._Rect16_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf2ca43;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grpFront2_4_i = function () {
		var t = new eui.Group();
		this.grpFront2_4 = t;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 82;
		t.x = 192;
		t.y = 107;
		t.elementsContent = [this._Rect17_i()];
		return t;
	};
	_proto._Rect17_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf2ca43;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grpFront2_5_i = function () {
		var t = new eui.Group();
		this.grpFront2_5 = t;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 82;
		t.x = 277;
		t.y = 107;
		t.elementsContent = [this._Rect18_i()];
		return t;
	};
	_proto._Rect18_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf2ca43;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grpFront2_6_i = function () {
		var t = new eui.Group();
		this.grpFront2_6 = t;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 82;
		t.x = 363;
		t.y = 107;
		t.elementsContent = [this._Rect19_i()];
		return t;
	};
	_proto._Rect19_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf2ca43;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grpFront2_7_i = function () {
		var t = new eui.Group();
		this.grpFront2_7 = t;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 82;
		t.x = 448;
		t.y = 107;
		t.elementsContent = [this._Rect20_i()];
		return t;
	};
	_proto._Rect20_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf2ca43;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grpFront2_8_i = function () {
		var t = new eui.Group();
		this.grpFront2_8 = t;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 82;
		t.x = 534;
		t.y = 107;
		t.elementsContent = [this._Rect21_i()];
		return t;
	};
	_proto._Rect21_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf2ca43;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grpFront3_4_i = function () {
		var t = new eui.Group();
		this.grpFront3_4 = t;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 82;
		t.x = 192;
		t.y = 166;
		t.elementsContent = [this._Rect22_i()];
		return t;
	};
	_proto._Rect22_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf2ca43;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grpFront3_5_i = function () {
		var t = new eui.Group();
		this.grpFront3_5 = t;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 82;
		t.x = 278;
		t.y = 166;
		t.elementsContent = [this._Rect23_i()];
		return t;
	};
	_proto._Rect23_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf2ca43;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grpFront3_6_i = function () {
		var t = new eui.Group();
		this.grpFront3_6 = t;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 82;
		t.x = 363;
		t.y = 166;
		t.elementsContent = [this._Rect24_i()];
		return t;
	};
	_proto._Rect24_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf2ca43;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grpFront3_7_i = function () {
		var t = new eui.Group();
		this.grpFront3_7 = t;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 82;
		t.x = 449;
		t.y = 166;
		t.elementsContent = [this._Rect25_i()];
		return t;
	};
	_proto._Rect25_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf2ca43;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grpFront3_8_i = function () {
		var t = new eui.Group();
		this.grpFront3_8 = t;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 82;
		t.x = 534;
		t.y = 166;
		t.elementsContent = [this._Rect26_i()];
		return t;
	};
	_proto._Rect26_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf2ca43;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grpFront4_5_i = function () {
		var t = new eui.Group();
		this.grpFront4_5 = t;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 82;
		t.x = 278;
		t.y = 223;
		t.elementsContent = [this._Rect27_i()];
		return t;
	};
	_proto._Rect27_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf2ca43;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grpFront4_6_i = function () {
		var t = new eui.Group();
		this.grpFront4_6 = t;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 82;
		t.x = 363;
		t.y = 223;
		t.elementsContent = [this._Rect28_i()];
		return t;
	};
	_proto._Rect28_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf2ca43;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grpFront4_7_i = function () {
		var t = new eui.Group();
		this.grpFront4_7 = t;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 82;
		t.x = 449;
		t.y = 223;
		t.elementsContent = [this._Rect29_i()];
		return t;
	};
	_proto._Rect29_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf2ca43;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grpFront4_8_i = function () {
		var t = new eui.Group();
		this.grpFront4_8 = t;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 82;
		t.x = 534;
		t.y = 223;
		t.elementsContent = [this._Rect30_i()];
		return t;
	};
	_proto._Rect30_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf2ca43;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grpFront5_6_i = function () {
		var t = new eui.Group();
		this.grpFront5_6 = t;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 82;
		t.x = 362;
		t.y = 280;
		t.elementsContent = [this._Rect31_i()];
		return t;
	};
	_proto._Rect31_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf2ca43;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grpFront5_7_i = function () {
		var t = new eui.Group();
		this.grpFront5_7 = t;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 82;
		t.x = 448;
		t.y = 280;
		t.elementsContent = [this._Rect32_i()];
		return t;
	};
	_proto._Rect32_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf2ca43;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grpFront5_8_i = function () {
		var t = new eui.Group();
		this.grpFront5_8 = t;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 82;
		t.x = 534;
		t.y = 280;
		t.elementsContent = [this._Rect33_i()];
		return t;
	};
	_proto._Rect33_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf2ca43;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grpFront6_7_i = function () {
		var t = new eui.Group();
		this.grpFront6_7 = t;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 82;
		t.x = 448;
		t.y = 336;
		t.elementsContent = [this._Rect34_i()];
		return t;
	};
	_proto._Rect34_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf2ca43;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grpFront6_8_i = function () {
		var t = new eui.Group();
		this.grpFront6_8 = t;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 82;
		t.x = 534;
		t.y = 336;
		t.elementsContent = [this._Rect35_i()];
		return t;
	};
	_proto._Rect35_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf2ca43;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grpFront7_8_i = function () {
		var t = new eui.Group();
		this.grpFront7_8 = t;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 82;
		t.x = 535;
		t.y = 391;
		t.elementsContent = [this._Rect36_i()];
		return t;
	};
	_proto._Rect36_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf2ca43;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grpTalk_i = function () {
		var t = new eui.Group();
		this.grpTalk = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 208.48;
		t.horizontalCenter = 0;
		t.width = 640;
		return t;
	};
	_proto.grpTopMenu_i = function () {
		var t = new eui.Group();
		this.grpTopMenu = t;
		t.height = 76;
		t.left = 0;
		t.right = 0;
		t.top = -9;
		t.elementsContent = [this._Image13_i(),this.bt_tm_i(),this.grpTopMenu_SubMenu_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 97;
		t.horizontalCenter = -4;
		t.source = "game_res_json.tm_bg";
		t.verticalCenter = -5;
		t.width = 681;
		return t;
	};
	_proto.bt_tm_i = function () {
		var t = new eui.Button();
		this.bt_tm = t;
		t.enabled = true;
		t.label = "";
		t.right = 39;
		t.top = 12;
		t.skinName = Scene_BetsSkin$Skin1;
		return t;
	};
	_proto.grpTopMenu_SubMenu_i = function () {
		var t = new eui.Group();
		this.grpTopMenu_SubMenu = t;
		t.height = 256;
		t.width = 180;
		t.x = 430;
		t.y = 78;
		t.elementsContent = [this._Image14_i(),this.txtAdsBidding_i(),this.txtDividends_i(),this.txtReferral_i(),this.txtFAQ_i(),this.txtContact_i(),this._Group2_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 256;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(20,25,123,155);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tm_new_sm_png";
		t.top = 0;
		return t;
	};
	_proto.txtAdsBidding_i = function () {
		var t = new eui.Label();
		this.txtAdsBidding = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 32;
		t.size = 22;
		t.text = "Ads Bidding";
		t.textAlign = "center";
		t.textColor = 0xf78e42;
		t.verticalAlign = "middle";
		t.width = 133;
		t.x = 23;
		t.y = 16;
		return t;
	};
	_proto.txtDividends_i = function () {
		var t = new eui.Label();
		this.txtDividends = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 32;
		t.size = 22;
		t.text = "Dividends";
		t.textAlign = "center";
		t.textColor = 0xf78e42;
		t.verticalAlign = "middle";
		t.width = 133;
		t.x = 23;
		t.y = 64;
		return t;
	};
	_proto.txtReferral_i = function () {
		var t = new eui.Label();
		this.txtReferral = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 32;
		t.size = 22;
		t.text = "Referral";
		t.textAlign = "center";
		t.textColor = 0xf78e42;
		t.verticalAlign = "middle";
		t.width = 133;
		t.x = 23;
		t.y = 112;
		return t;
	};
	_proto.txtFAQ_i = function () {
		var t = new eui.Label();
		this.txtFAQ = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 32;
		t.size = 22;
		t.text = "FAQ";
		t.textAlign = "center";
		t.textColor = 0xF78E42;
		t.verticalAlign = "middle";
		t.width = 133;
		t.x = 23;
		t.y = 157;
		return t;
	};
	_proto.txtContact_i = function () {
		var t = new eui.Label();
		this.txtContact = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 32;
		t.size = 22;
		t.text = "Contact";
		t.textAlign = "center";
		t.textColor = 0xf78e42;
		t.verticalAlign = "middle";
		t.width = 133;
		t.x = 23;
		t.y = 205;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.bt_adword_i(),this.bt_getBonus_i(),this.bt_referral_i(),this.bt_help_i(),this.bt_contact_i()];
		return t;
	};
	_proto.bt_adword_i = function () {
		var t = new eui.Rect();
		this.bt_adword = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 152;
		t.x = 13;
		t.y = 15;
		return t;
	};
	_proto.bt_getBonus_i = function () {
		var t = new eui.Rect();
		this.bt_getBonus = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 152;
		t.x = 13;
		t.y = 61;
		return t;
	};
	_proto.bt_referral_i = function () {
		var t = new eui.Rect();
		this.bt_referral = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 152;
		t.x = 13;
		t.y = 106;
		return t;
	};
	_proto.bt_help_i = function () {
		var t = new eui.Rect();
		this.bt_help = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 152;
		t.x = 13;
		t.y = 151;
		return t;
	};
	_proto.bt_contact_i = function () {
		var t = new eui.Rect();
		this.bt_contact = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 152;
		t.x = 13;
		t.y = 200;
		return t;
	};
	return Scene_BetsSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Scene_RunningGame.exml'] = window.Scene_RunningGameSkin = (function (_super) {
	__extends(Scene_RunningGameSkin, _super);
	function Scene_RunningGameSkin() {
		_super.call(this);
		this.skinParts = ["grpMajor","grpTalk"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.grpMajor_i(),this.grpTalk_i()];
	}
	var _proto = Scene_RunningGameSkin.prototype;

	_proto.grpMajor_i = function () {
		var t = new eui.Group();
		this.grpMajor = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 640;
		return t;
	};
	_proto.grpTalk_i = function () {
		var t = new eui.Group();
		this.grpTalk = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 208.48;
		t.horizontalCenter = 0;
		t.width = 640;
		return t;
	};
	return Scene_RunningGameSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Unit_Bit.exml'] = window.Unit_BitSkin = (function (_super) {
	__extends(Unit_BitSkin, _super);
	function Unit_BitSkin() {
		_super.call(this);
		this.skinParts = ["mcBg","txtLabel"];
		
		this.height = 59;
		this.width = 57;
		this.elementsContent = [this.mcBg_i(),this.txtLabel_i()];
	}
	var _proto = Unit_BitSkin.prototype;

	_proto.mcBg_i = function () {
		var t = new eui.Image();
		this.mcBg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "game_res_json.simbol_bit1";
		t.top = 0;
		return t;
	};
	_proto.txtLabel_i = function () {
		var t = new eui.Label();
		this.txtLabel = t;
		t.anchorOffsetX = 29.6;
		t.anchorOffsetY = 29;
		t.bottom = 1;
		t.left = 2;
		t.right = -2;
		t.size = 20;
		t.text = "999";
		t.textAlign = "center";
		t.top = -1;
		t.verticalAlign = "middle";
		return t;
	};
	return Unit_BitSkin;
})(eui.Skin);