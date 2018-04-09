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
generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"}
generateEUI.paths['resource/eui_skins/AboutPanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton","blogButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i(),this.blogButton_i()];
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
		t.alpha = 1;
		t.bottom = 15;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	_proto.blogButton_i = function () {
		var t = new eui.Button();
		this.blogButton = t;
		t.label = "Button";
		t.left = 30;
		t.right = 30;
		t.top = 80;
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/AnswerTwoPanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton","yesButton","quizLabel"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i(),this.yesButton_i(),this.quizLabel_i()];
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
		t.alpha = 1;
		t.bottom = 15;
		t.label = "No";
		t.right = 90;
		return t;
	};
	_proto.yesButton_i = function () {
		var t = new eui.Button();
		this.yesButton = t;
		t.bottom = 15;
		t.label = "Yes";
		t.left = 90;
		return t;
	};
	_proto.quizLabel_i = function () {
		var t = new eui.Label();
		this.quizLabel = t;
		t.left = 15;
		t.multiline = true;
		t.right = 15;
		t.size = 18;
		t.text = "Label";
		t.textColor = 0x2c83d4;
		t.wordWrap = true;
		t.y = 65;
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/BaitItemRendererSkin.exml'] = window.BaitItemRendererSkin = (function (_super) {
	__extends(BaitItemRendererSkin, _super);
	function BaitItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["countLabel"];
		
		this.height = 50;
		this.minHeight = 120;
		this.minWidth = 100;
		this.width = 50;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.countLabel_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.8)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.thumb_url"],[0],this._Image1,"source")
	}
	var _proto = BaitItemRendererSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xa89ca5;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.height = 50;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 50;
		return t;
	};
	_proto.countLabel_i = function () {
		var t = new eui.Label();
		this.countLabel = t;
		t.bottom = 1;
		t.height = 15;
		t.left = 1;
		t.right = 1;
		t.size = 15;
		t.text = "0x0";
		t.textAlign = "right";
		t.textColor = 0xffffff;
		return t;
	};
	return BaitItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/BaitPanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton","baitList","baitImage","baitTipLabel"];
		
		this.height = 260;
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i(),this.baitList_i(),this._Group1_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 260;
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
		t.alpha = 1;
		t.bottom = 15;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	_proto.baitList_i = function () {
		var t = new eui.List();
		this.baitList = t;
		t.bottom = 85;
		t.height = 50;
		t.horizontalCenter = 0;
		t.left = 30;
		t.right = 30;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 15;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.left = 30;
		t.right = 30;
		t.top = 60;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this.baitImage_i(),this.baitTipLabel_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 15;
		t.horizontalAlign = "left";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.baitImage_i = function () {
		var t = new eui.Image();
		this.baitImage = t;
		t.height = 50;
		t.width = 50;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.baitTipLabel_i = function () {
		var t = new eui.Label();
		this.baitTipLabel = t;
		t.size = 20;
		t.text = "鱼饵状态";
		t.textColor = 0x2c83d4;
		t.x = 60;
		t.y = 5;
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
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
					new eui.SetProperty("_Image1","source","button_down_png")
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
		t.source = "button_bg_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/ClarifyPanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton","messageLabel"];
		
		this.height = 350;
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i(),this.messageLabel_i()];
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
		t.alpha = 1;
		t.bottom = 15;
		t.horizontalCenter = 0;
		t.label = "close";
		t.visible = true;
		return t;
	};
	_proto.messageLabel_i = function () {
		var t = new eui.EditableText();
		this.messageLabel = t;
		t.bottom = "80";
		t.left = "20";
		t.multiline = true;
		t.right = "20";
		t.size = 20;
		t.text = "Label";
		t.textColor = 0x2c83d4;
		t.top = "60";
		t.wordWrap = true;
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CleanPoolPanelSkin.exml'] = window.skins.CleanPoolPanelSkin = (function (_super) {
	__extends(CleanPoolPanelSkin, _super);
	function CleanPoolPanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","updateLabel","moveArea","closeButton","cleanLevelLabel","currentExpLabel","myCleanserLabel","cleanserList"];
		
		this.minHeight = 270;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i(),this.cleanLevelLabel_i(),this.currentExpLabel_i(),this.myCleanserLabel_i(),this.cleanserList_i()];
	}
	var _proto = CleanPoolPanelSkin.prototype;

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
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i(),this.updateLabel_i()];
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
	_proto.updateLabel_i = function () {
		var t = new eui.Label();
		this.updateLabel = t;
		t.fontFamily = "Tahoma";
		t.right = 15;
		t.size = 12;
		t.text = "x";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.alpha = 1;
		t.bottom = 10;
		t.horizontalCenter = 0;
		t.label = "close";
		t.visible = true;
		return t;
	};
	_proto.cleanLevelLabel_i = function () {
		var t = new eui.Label();
		this.cleanLevelLabel = t;
		t.left = 25;
		t.right = 25;
		t.size = 16;
		t.text = "清洁度:";
		t.textColor = 0x2c83d4;
		t.top = 60;
		return t;
	};
	_proto.currentExpLabel_i = function () {
		var t = new eui.Label();
		this.currentExpLabel = t;
		t.left = 25;
		t.right = 25;
		t.size = 16;
		t.text = "每次更新给鱼的经验值:";
		t.textColor = 0x2c83d4;
		t.top = 85;
		return t;
	};
	_proto.myCleanserLabel_i = function () {
		var t = new eui.Label();
		this.myCleanserLabel = t;
		t.left = 25;
		t.right = 25;
		t.size = 16;
		t.text = "我的清洁剂";
		t.textColor = 0x2c83d4;
		t.top = 120;
		return t;
	};
	_proto.cleanserList_i = function () {
		var t = new eui.List();
		this.cleanserList = t;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.left = 25;
		t.right = 25;
		t.top = 145;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		return t;
	};
	return CleanPoolPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/FeedPanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton","feedList","feedImage","feedTipLabel"];
		
		this.height = 260;
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i(),this.feedList_i(),this._Group1_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 260;
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
		t.alpha = 1;
		t.bottom = 15;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	_proto.feedList_i = function () {
		var t = new eui.List();
		this.feedList = t;
		t.bottom = 85;
		t.height = 50;
		t.horizontalCenter = 0;
		t.left = 30;
		t.right = 30;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 15;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.left = 30;
		t.right = 30;
		t.top = 60;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this.feedImage_i(),this.feedTipLabel_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 15;
		t.horizontalAlign = "left";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.feedImage_i = function () {
		var t = new eui.Image();
		this.feedImage = t;
		t.height = 50;
		t.width = 50;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.feedTipLabel_i = function () {
		var t = new eui.Label();
		this.feedTipLabel = t;
		t.size = 20;
		t.text = "鱼食状态";
		t.textColor = 0x2c83d4;
		t.x = 60;
		t.y = 5;
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/FishBoxItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.minHeight = 50;
		this.minWidth = 50;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.thumb_url"],[0],this._Image1,"source")
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.percentWidth = 100;
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/FishBoxPanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton","boxList","boxImage","boxLabel"];
		
		this.height = 255;
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i(),this.boxList_i(),this._Group1_i()];
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
		t.alpha = 1;
		t.bottom = 15;
		t.horizontalCenter = 0;
		t.label = "close";
		t.visible = true;
		return t;
	};
	_proto.boxList_i = function () {
		var t = new eui.List();
		this.boxList = t;
		t.height = 50;
		t.horizontalCenter = 0;
		t.left = 20;
		t.right = 20;
		t.y = 125;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.left = 20;
		t.top = 60;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this.boxImage_i(),this.boxLabel_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 15;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.boxImage_i = function () {
		var t = new eui.Image();
		this.boxImage = t;
		t.height = 50;
		t.width = 50;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.boxLabel_i = function () {
		var t = new eui.Label();
		this.boxLabel = t;
		t.size = 20;
		t.text = "Label";
		t.textColor = 0x2c83d4;
		t.x = 66;
		t.y = 11;
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/FishOperatePanel.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton","sellButton","boxButton","freeButton","fishSellInfo"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i(),this.sellButton_i(),this.boxButton_i(),this.freeButton_i(),this.fishSellInfo_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.6;
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
		t.alpha = 1;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		t.visible = false;
		return t;
	};
	_proto.sellButton_i = function () {
		var t = new eui.Button();
		this.sellButton = t;
		t.label = "卖鱼";
		t.left = 15;
		t.y = 170;
		return t;
	};
	_proto.boxButton_i = function () {
		var t = new eui.Button();
		this.boxButton = t;
		t.horizontalCenter = 0;
		t.label = "放入鱼箱";
		t.y = 170;
		return t;
	};
	_proto.freeButton_i = function () {
		var t = new eui.Button();
		this.freeButton = t;
		t.label = "放生";
		t.right = 15;
		t.y = 170;
		return t;
	};
	_proto.fishSellInfo_i = function () {
		var t = new FishSellInfo();
		this.fishSellInfo = t;
		t.bottom = 70;
		t.left = 15;
		t.right = 15;
		t.top = 60;
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/FishSellInfoSkin.exml'] = window.FishSellInfoSkin = (function (_super) {
	__extends(FishSellInfoSkin, _super);
	function FishSellInfoSkin() {
		_super.call(this);
		this.skinParts = ["fishThumb","fishLabel","descriptionLabel","qualityLabel","priceLabel"];
		
		this.height = 100;
		this.width = 350;
		this.elementsContent = [this.fishThumb_i(),this.fishLabel_i(),this.descriptionLabel_i(),this._Group1_i()];
	}
	var _proto = FishSellInfoSkin.prototype;

	_proto.fishThumb_i = function () {
		var t = new eui.Image();
		this.fishThumb = t;
		t.alpha = 1;
		t.height = 50;
		t.width = 50;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.fishLabel_i = function () {
		var t = new eui.Label();
		this.fishLabel = t;
		t.size = 20;
		t.text = "Name";
		t.textColor = 0x2c83d4;
		t.x = 65;
		t.y = 0;
		return t;
	};
	_proto.descriptionLabel_i = function () {
		var t = new eui.Label();
		this.descriptionLabel = t;
		t.horizontalCenter = 0;
		t.minWidth = 350;
		t.multiline = true;
		t.size = 15;
		t.text = "description";
		t.textAlign = "center";
		t.textColor = 0x2c83d4;
		t.percentWidth = 100;
		t.wordWrap = true;
		t.y = 65;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 65;
		t.y = 32;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.qualityLabel_i(),this.priceLabel_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 25;
		return t;
	};
	_proto.qualityLabel_i = function () {
		var t = new eui.Label();
		this.qualityLabel = t;
		t.size = 18;
		t.text = "中";
		t.textColor = 0x2c83d4;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.priceLabel_i = function () {
		var t = new eui.Label();
		this.priceLabel = t;
		t.size = 18;
		t.text = "0";
		t.textColor = 0x2c83d4;
		t.x = 179.5;
		t.y = 0.96;
		return t;
	};
	return FishSellInfoSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/FishShowPanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","okButton","closeButton","buyBareGroup","sellButton","putButton","close2Button","sellFishGroup","boxTipLabel","fishSellInfo"];
		
		this.height = 250;
		this.minHeight = 230;
		this.minWidth = 450;
		this.width = 480;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.buyBareGroup_i(),this.sellFishGroup_i(),this.boxTipLabel_i(),this.fishSellInfo_i()];
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
	_proto.buyBareGroup_i = function () {
		var t = new eui.Group();
		this.buyBareGroup = t;
		t.bottom = 15;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.okButton_i(),this.closeButton_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 140;
		t.horizontalAlign = "center";
		return t;
	};
	_proto.okButton_i = function () {
		var t = new eui.Button();
		this.okButton = t;
		t.alpha = 1;
		t.label = "ok";
		t.left = 150;
		t.minWidth = 100;
		t.width = 100;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.alpha = 1;
		t.label = "close";
		t.right = 150;
		return t;
	};
	_proto.sellFishGroup_i = function () {
		var t = new eui.Group();
		this.sellFishGroup = t;
		t.bottom = 15;
		t.horizontalCenter = 0;
		t.visible = false;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this.sellButton_i(),this.putButton_i(),this.close2Button_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 50;
		t.horizontalAlign = "center";
		return t;
	};
	_proto.sellButton_i = function () {
		var t = new eui.Button();
		this.sellButton = t;
		t.alpha = 1;
		t.label = "sell";
		t.left = 150;
		t.width = 100;
		return t;
	};
	_proto.putButton_i = function () {
		var t = new eui.Button();
		this.putButton = t;
		t.label = "put";
		t.x = 177;
		t.y = 1;
		return t;
	};
	_proto.close2Button_i = function () {
		var t = new eui.Button();
		this.close2Button = t;
		t.alpha = 1;
		t.label = "close";
		t.right = 150;
		return t;
	};
	_proto.boxTipLabel_i = function () {
		var t = new eui.Label();
		this.boxTipLabel = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "boxTipLabel";
		t.textColor = 0x2c83d4;
		t.verticalCenter = 0;
		return t;
	};
	_proto.fishSellInfo_i = function () {
		var t = new FishSellInfo();
		this.fishSellInfo = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.left = 30;
		t.right = 30;
		t.top = 60;
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HelpPanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","soundButton","aboutButton","languageButton","closeButton","leftButton","tipLabel","rightButton"];
		
		this.height = 300;
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this._Group1_i(),this._Group2_i()];
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
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 20;
		t.height = 50;
		t.left = 20;
		t.right = 20;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.soundButton_i(),this.aboutButton_i(),this.languageButton_i(),this.closeButton_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 15;
		t.horizontalAlign = "center";
		return t;
	};
	_proto.soundButton_i = function () {
		var t = new eui.Button();
		this.soundButton = t;
		t.label = "Sound";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.aboutButton_i = function () {
		var t = new eui.Button();
		this.aboutButton = t;
		t.label = "About";
		t.x = 143;
		t.y = 1;
		return t;
	};
	_proto.languageButton_i = function () {
		var t = new eui.Button();
		this.languageButton = t;
		t.label = "LLL";
		t.x = 351;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.alpha = 1;
		t.label = "Close";
		t.x = 253;
		t.y = 1;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 85;
		t.left = 20;
		t.right = 20;
		t.top = 60;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this.leftButton_i(),this.tipLabel_i(),this.rightButton_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.leftButton_i = function () {
		var t = new eui.Button();
		this.leftButton = t;
		t.label = "<";
		t.left = 0;
		t.verticalCenter = 0;
		t.width = 50;
		return t;
	};
	_proto.tipLabel_i = function () {
		var t = new eui.EditableText();
		this.tipLabel = t;
		t.bottom = "0";
		t.left = "60";
		t.multiline = true;
		t.right = "60";
		t.size = 18;
		t.text = "Label";
		t.textAlign = "left";
		t.textColor = 0x2c83d4;
		t.top = "0";
		t.verticalAlign = "middle";
		t.wordWrap = true;
		return t;
	};
	_proto.rightButton_i = function () {
		var t = new eui.Button();
		this.rightButton = t;
		t.label = ">";
		t.right = 0;
		t.verticalCenter = 0;
		t.width = 50;
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
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
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/InSideLevelPanelSkin.exml'] = window.InSideLevelPanelSkin = (function (_super) {
	__extends(InSideLevelPanelSkin, _super);
	function InSideLevelPanelSkin() {
		_super.call(this);
		this.skinParts = ["touchRect","hideButton","leaveButton","myBoxLabel","boxList","baitList","myBaitLabel","baitTipLabel","clearButton"];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this.touchRect_i(),this._Group2_i(),this._Group3_i()];
	}
	var _proto = InSideLevelPanelSkin.prototype;

	_proto.touchRect_i = function () {
		var t = new eui.Rect();
		this.touchRect = t;
		t.bottom = 0;
		t.fillAlpha = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 220;
		t.percentWidth = 100;
		t.elementsContent = [this._Rect1_i(),this.hideButton_i(),this.leaveButton_i(),this.myBoxLabel_i(),this.boxList_i(),this.baitList_i(),this._Group1_i(),this.clearButton_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.77;
		t.fillColor = 0xf7f2f2;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.hideButton_i = function () {
		var t = new eui.Button();
		this.hideButton = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 40;
		t.label = "↑";
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	_proto.leaveButton_i = function () {
		var t = new eui.Button();
		this.leaveButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 180;
		t.label = "→";
		t.right = 0;
		t.top = 0;
		t.width = 40;
		return t;
	};
	_proto.myBoxLabel_i = function () {
		var t = new eui.Label();
		this.myBoxLabel = t;
		t.size = 18;
		t.text = "我的鱼箱";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.x = 15;
		t.y = 7.5;
		return t;
	};
	_proto.boxList_i = function () {
		var t = new eui.List();
		this.boxList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.left = 15;
		t.right = 50;
		t.y = 31.5;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.baitList_i = function () {
		var t = new eui.List();
		this.baitList = t;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.left = 15;
		t.right = 50;
		t.y = 118;
		t.layout = this._HorizontalLayout2_i();
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 15;
		t.y = 93;
		t.layout = this._HorizontalLayout3_i();
		t.elementsContent = [this.myBaitLabel_i(),this.baitTipLabel_i()];
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.myBaitLabel_i = function () {
		var t = new eui.Label();
		this.myBaitLabel = t;
		t.size = 18;
		t.text = "我的诱饵";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.baitTipLabel_i = function () {
		var t = new eui.Label();
		this.baitTipLabel = t;
		t.size = 18;
		t.text = "请选择诱饵↓";
		t.textColor = 0x000000;
		t.x = 82;
		t.y = 0;
		return t;
	};
	_proto.clearButton_i = function () {
		var t = new eui.Button();
		this.clearButton = t;
		t.anchorOffsetX = 0;
		t.height = 40;
		t.label = "Button";
		t.right = 40;
		t.top = 0;
		t.visible = false;
		t.width = 206;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 80;
		t.visible = false;
		t.percentWidth = 100;
		t.elementsContent = [this._Rect2_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.8;
		t.fillColor = 0xf7f2f2;
		t.percentHeight = 100;
		t.strokeAlpha = 1;
		t.strokeColor = 0xf7f2f2;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return InSideLevelPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemListItemRendererSkin.exml'] = window.ShopListItemRendererSkin = (function (_super) {
	__extends(ShopListItemRendererSkin, _super);
	function ShopListItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["thumbImage","nameLabel","countLabel"];
		
		this.height = 60;
		this.minHeight = 55;
		this.minWidth = 150;
		this.width = 200;
		this.elementsContent = [this._Image1_i(),this.thumbImage_i(),this._Group3_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.thumb_url"],[0],this.thumbImage,"source")
	}
	var _proto = ShopListItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 0.85;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.thumbImage_i = function () {
		var t = new eui.Image();
		this.thumbImage = t;
		t.height = 50;
		t.left = 5;
		t.verticalCenter = 0;
		t.width = 50;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.left = 60;
		t.right = 5;
		t.verticalCenter = 0;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.left = 0;
		t.verticalCenter = 0;
		t.percentWidth = 85;
		t.elementsContent = [this._Rect1_i(),this.nameLabel_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xbf4e4e;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.nameLabel_i = function () {
		var t = new eui.Label();
		this.nameLabel = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.right = 0;
		t.verticalCenter = 0;
		t.percentWidth = 15;
		t.elementsContent = [this.countLabel_i()];
		return t;
	};
	_proto.countLabel_i = function () {
		var t = new eui.Label();
		this.countLabel = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		return t;
	};
	return ShopListItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemPanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","moveLeftButton","moveRightButton","pageIndexInputer","buttonGroup","itemList","naviUpButton","itemTabBar","naviDownButton","mySpaceButton","shopButton","helpButton","languageButton"];
		
		this.height = 450;
		this.minHeight = 230;
		this.minWidth = 450;
		this.width = 500;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this._Group2_i(),this._Group3_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 400;
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
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.bottom = 20;
		t.left = 15;
		t.right = 15;
		t.top = 120;
		t.layout = this._BasicLayout2_i();
		t.elementsContent = [this.buttonGroup_i(),this.itemList_i(),this._Group1_i()];
		return t;
	};
	_proto._BasicLayout2_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.buttonGroup_i = function () {
		var t = new eui.Group();
		this.buttonGroup = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this.moveLeftButton_i(),this.moveRightButton_i(),this.pageIndexInputer_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.moveLeftButton_i = function () {
		var t = new eui.Button();
		this.moveLeftButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.label = "<";
		t.left = 0;
		t.width = 100;
		t.y = 0;
		return t;
	};
	_proto.moveRightButton_i = function () {
		var t = new eui.Button();
		this.moveRightButton = t;
		t.height = 50;
		t.label = ">";
		t.right = 0;
		t.width = 100;
		t.y = 0;
		return t;
	};
	_proto.pageIndexInputer_i = function () {
		var t = new eui.TextInput();
		this.pageIndexInputer = t;
		t.height = 50;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 100;
		return t;
	};
	_proto.itemList_i = function () {
		var t = new eui.List();
		this.itemList = t;
		t.bottom = 65;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.top = 65;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.columnAlign = "justifyUsingWidth";
		t.horizontalGap = 5;
		t.orientation = "rows";
		t.requestedColumnCount = 2;
		t.rowHeight = 55;
		t.verticalGap = 5;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.naviUpButton_i(),this.itemTabBar_i(),this.naviDownButton_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 5;
		return t;
	};
	_proto.naviUpButton_i = function () {
		var t = new eui.Button();
		this.naviUpButton = t;
		t.label = "<";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.itemTabBar_i = function () {
		var t = new eui.TabBar();
		this.itemTabBar = t;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.includeInLayout = true;
		t.scrollEnabled = true;
		t.useVirtualLayout = true;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._TileLayout2_i();
		return t;
	};
	_proto._TileLayout2_i = function () {
		var t = new eui.TileLayout();
		t.requestedRowCount = 1;
		return t;
	};
	_proto.naviDownButton_i = function () {
		var t = new eui.Button();
		this.naviDownButton = t;
		t.label = ">";
		t.x = 370;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.left = 15;
		t.right = 15;
		t.top = 55;
		t.layout = this._TileLayout3_i();
		t.elementsContent = [this.mySpaceButton_i(),this.shopButton_i(),this.helpButton_i(),this.languageButton_i()];
		return t;
	};
	_proto._TileLayout3_i = function () {
		var t = new eui.TileLayout();
		t.columnAlign = "justifyUsingWidth";
		t.horizontalGap = 25;
		t.orientation = "rows";
		t.requestedRowCount = 1;
		t.rowHeight = 50;
		return t;
	};
	_proto.mySpaceButton_i = function () {
		var t = new eui.Button();
		this.mySpaceButton = t;
		t.label = "我的老巢";
		t.left = 0;
		t.y = 0;
		return t;
	};
	_proto.shopButton_i = function () {
		var t = new eui.Button();
		this.shopButton = t;
		t.horizontalCenter = 0;
		t.label = "菜市场";
		t.y = 2;
		return t;
	};
	_proto.helpButton_i = function () {
		var t = new eui.Button();
		this.helpButton = t;
		t.height = 50;
		t.label = "帮助";
		t.right = 0;
		t.y = 1;
		return t;
	};
	_proto.languageButton_i = function () {
		var t = new eui.Button();
		this.languageButton = t;
		t.height = 50;
		t.label = "LLL";
		t.x = 270;
		t.y = 3;
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
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
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text")
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemShowPanelSkin.exml'] = window.ShopShowPanelSkin = (function (_super) {
	__extends(ShopShowPanelSkin, _super);
	function ShopShowPanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton","itemNameLabel","itemPriceLabel","itemDescriptionLabel","useButton","cancelButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i(),this._Group1_i(),this.useButton_i(),this.cancelButton_i()];
	}
	var _proto = ShopShowPanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 250;
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
		t.alpha = 1;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		t.visible = false;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 65;
		t.left = 20;
		t.right = 20;
		t.top = 60;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.itemNameLabel_i(),this.itemPriceLabel_i(),this.itemDescriptionLabel_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 15;
		return t;
	};
	_proto.itemNameLabel_i = function () {
		var t = new eui.Label();
		this.itemNameLabel = t;
		t.size = 18;
		t.text = "商品名字";
		t.textColor = 0x2c83d4;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.itemPriceLabel_i = function () {
		var t = new eui.Label();
		this.itemPriceLabel = t;
		t.size = 15;
		t.text = "只需";
		t.textColor = 0x2c83d4;
		t.x = 0;
		t.y = 60;
		return t;
	};
	_proto.itemDescriptionLabel_i = function () {
		var t = new eui.EditableText();
		this.itemDescriptionLabel = t;
		t.height = 80;
		t.multiline = true;
		t.size = 18;
		t.text = "Label";
		t.textColor = 0x2c83d4;
		t.percentWidth = 100;
		t.wordWrap = true;
		t.x = 3;
		t.y = 58;
		return t;
	};
	_proto.useButton_i = function () {
		var t = new eui.Button();
		this.useButton = t;
		t.bottom = 10;
		t.height = 50;
		t.label = "使用";
		t.width = 100;
		t.x = 15;
		return t;
	};
	_proto.cancelButton_i = function () {
		var t = new eui.Button();
		this.cancelButton = t;
		t.bottom = 10;
		t.label = "看看而已";
		t.x = 336;
		return t;
	};
	return ShopShowPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemTabRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
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
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/LanguageItemSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
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
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.sample"],[0],this.labelDisplay,"text")
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/LanguagePanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","languageList"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.languageList_i()];
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
	_proto.languageList_i = function () {
		var t = new eui.List();
		this.languageList = t;
		t.bottom = 20;
		t.horizontalCenter = 0;
		t.top = 60;
		t.width = 120;
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LevelTailPanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton","tipButton","useButton","boxButton","morraButton","helpButton","languageButton","backButton"];
		
		this.height = 160;
		this.minHeight = 230;
		this.width = 500;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i(),this._Group1_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.7;
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
		t.height = 40;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
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
		t.alpha = 1;
		t.bottom = 0;
		t.height = 40;
		t.horizontalCenter = 0;
		t.label = "↑";
		t.left = 0;
		t.right = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.left = 20;
		t.right = 20;
		t.verticalCenter = 0;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this.tipButton_i(),this.useButton_i(),this.boxButton_i(),this.morraButton_i(),this.helpButton_i(),this.languageButton_i(),this.backButton_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.columnWidth = 100;
		t.horizontalGap = 10;
		t.requestedRowCount = 1;
		t.rowHeight = 50;
		t.verticalGap = 10;
		return t;
	};
	_proto.tipButton_i = function () {
		var t = new eui.Button();
		this.tipButton = t;
		t.label = "甩钩!";
		t.x = 307;
		t.y = 22;
		return t;
	};
	_proto.useButton_i = function () {
		var t = new eui.Button();
		this.useButton = t;
		t.label = "";
		t.x = 117;
		t.y = 4;
		return t;
	};
	_proto.boxButton_i = function () {
		var t = new eui.Button();
		this.boxButton = t;
		t.label = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.morraButton_i = function () {
		var t = new eui.Button();
		this.morraButton = t;
		t.label = "猜拳";
		t.x = 234;
		t.y = 47;
		return t;
	};
	_proto.helpButton_i = function () {
		var t = new eui.Button();
		this.helpButton = t;
		t.label = "帮助";
		t.x = 240;
		t.y = 8;
		return t;
	};
	_proto.languageButton_i = function () {
		var t = new eui.Button();
		this.languageButton = t;
		t.label = "A↔文";
		t.x = 7;
		t.y = 71;
		return t;
	};
	_proto.backButton_i = function () {
		var t = new eui.Button();
		this.backButton = t;
		t.label = "→";
		t.x = 270;
		t.y = 65;
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LevyPanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton","agreeButton","tipLabel"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i(),this.agreeButton_i(),this.tipLabel_i()];
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
		t.elementsContent = [this._Rect1_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x2c83d4;
		t.left = 0;
		t.right = 0;
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
		t.text = "征收";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.alpha = 1;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		t.visible = false;
		return t;
	};
	_proto.agreeButton_i = function () {
		var t = new eui.Button();
		this.agreeButton = t;
		t.label = "同意";
		t.left = 20;
		t.right = 20;
		t.y = 169;
		return t;
	};
	_proto.tipLabel_i = function () {
		var t = new eui.EditableText();
		this.tipLabel = t;
		t.bottom = "75";
		t.left = "20";
		t.multiline = true;
		t.right = "20";
		t.size = 20;
		t.text = "Label";
		t.textColor = 0x2c83d4;
		t.top = "60";
		t.wordWrap = true;
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/MorraPanelSkin.exml'] = window.skins.MorraPanelSkin = (function (_super) {
	__extends(MorraPanelSkin, _super);
	function MorraPanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","guessButton","closeButton","paperRadio","scissorsRadio","rockRadio","resultLabel","firstSwitch","secondSwitch","thridSwitch"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this._Group1_i(),this._Group5_i()];
	}
	var _proto = MorraPanelSkin.prototype;

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
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 170;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.guessButton_i(),this.closeButton_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 20;
		return t;
	};
	_proto.guessButton_i = function () {
		var t = new eui.Button();
		this.guessButton = t;
		t.label = "猜!";
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.alpha = 1;
		t.label = "close";
		t.x = 117;
		t.y = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 60;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._Group2_i(),this._Group3_i(),this._Group4_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 15;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 25;
		t.y = 0;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this.paperRadio_i(),this.scissorsRadio_i(),this.rockRadio_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 15;
		return t;
	};
	_proto.paperRadio_i = function () {
		var t = new eui.RadioButton();
		this.paperRadio = t;
		t.label = "包";
		t.selected = true;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.scissorsRadio_i = function () {
		var t = new eui.RadioButton();
		this.scissorsRadio = t;
		t.label = "剪";
		t.x = 81;
		t.y = 1;
		return t;
	};
	_proto.rockRadio_i = function () {
		var t = new eui.RadioButton();
		this.rockRadio = t;
		t.label = "锤";
		t.x = 156;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 70;
		t.y = 47;
		t.layout = this._HorizontalLayout3_i();
		t.elementsContent = [this._Label1_i(),this.resultLabel_i()];
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 15;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 18;
		t.text = "Cpu";
		t.textColor = 0x2c83d4;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.resultLabel_i = function () {
		var t = new eui.Label();
		this.resultLabel = t;
		t.size = 18;
		t.text = "";
		t.textColor = 0x2c83d4;
		t.x = 214;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
		t.x = 0;
		t.y = 81;
		t.layout = this._HorizontalLayout4_i();
		t.elementsContent = [this.firstSwitch_i(),this.secondSwitch_i(),this.thridSwitch_i()];
		return t;
	};
	_proto._HorizontalLayout4_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 15;
		return t;
	};
	_proto.firstSwitch_i = function () {
		var t = new eui.ToggleSwitch();
		this.firstSwitch = t;
		t.label = "ToggleButton";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.secondSwitch_i = function () {
		var t = new eui.ToggleSwitch();
		this.secondSwitch = t;
		t.label = "ToggleButton";
		t.x = 85;
		t.y = 1;
		return t;
	};
	_proto.thridSwitch_i = function () {
		var t = new eui.ToggleSwitch();
		this.thridSwitch = t;
		t.label = "ToggleButton";
		t.selected = false;
		t.x = 177.5;
		t.y = 1;
		return t;
	};
	return MorraPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/MySpacePanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","gotoFishButton","allLabel","myBoxButton","myBaitButton","myItemButton","myLakeButton","morraButton","helpButton","aboutButton","languageButton"];
		
		this.height = 400;
		this.minHeight = 450;
		this.minWidth = 450;
		this.width = 500;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.gotoFishButton_i(),this._Group2_i()];
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
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
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
	_proto.gotoFishButton_i = function () {
		var t = new eui.Button();
		this.gotoFishButton = t;
		t.bottom = 85;
		t.horizontalCenter = 0;
		t.label = "Button";
		t.percentWidth = 80;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.top = 65;
		t.elementsContent = [this.allLabel_i(),this._Group1_i()];
		return t;
	};
	_proto.allLabel_i = function () {
		var t = new eui.Label();
		this.allLabel = t;
		t.size = 22;
		t.text = "我所支配的一切";
		t.textColor = 0x2c83d4;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 30;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this.myBoxButton_i(),this.myBaitButton_i(),this.myItemButton_i(),this.myLakeButton_i(),this.morraButton_i(),this.helpButton_i(),this.aboutButton_i(),this.languageButton_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 25;
		t.requestedColumnCount = 4;
		t.verticalGap = 15;
		return t;
	};
	_proto.myBoxButton_i = function () {
		var t = new eui.Button();
		this.myBoxButton = t;
		t.label = "我的鱼箱";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.myBaitButton_i = function () {
		var t = new eui.Button();
		this.myBaitButton = t;
		t.label = "我的诱饵";
		t.x = 128;
		t.y = 0;
		return t;
	};
	_proto.myItemButton_i = function () {
		var t = new eui.Button();
		this.myItemButton = t;
		t.label = "我的道具";
		t.x = 259;
		t.y = 0;
		return t;
	};
	_proto.myLakeButton_i = function () {
		var t = new eui.Button();
		this.myLakeButton = t;
		t.label = "我的鱼塘";
		t.x = 71;
		t.y = 20;
		return t;
	};
	_proto.morraButton_i = function () {
		var t = new eui.Button();
		this.morraButton = t;
		t.label = "猜拳";
		t.x = 71;
		t.y = 20;
		return t;
	};
	_proto.helpButton_i = function () {
		var t = new eui.Button();
		this.helpButton = t;
		t.label = "帮助";
		t.x = 218;
		t.y = 65;
		return t;
	};
	_proto.aboutButton_i = function () {
		var t = new eui.Button();
		this.aboutButton = t;
		t.label = "About";
		t.x = 380;
		t.y = 65;
		return t;
	};
	_proto.languageButton_i = function () {
		var t = new eui.Button();
		this.languageButton = t;
		t.label = "LLL";
		t.x = 71;
		t.y = 20;
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin_2.exml'] = window.skins.PanelSkin = (function (_super) {
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
		t.alpha = 1;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		t.visible = false;
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PoolDescriptionPanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","okButton","closeButton","tipsLabel","descriptLabel"];
		
		this.height = 300;
		this.minHeight = 230;
		this.minWidth = 450;
		this.width = 500;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.okButton_i(),this.closeButton_i(),this.tipsLabel_i(),this.descriptLabel_i()];
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
	_proto.okButton_i = function () {
		var t = new eui.Button();
		this.okButton = t;
		t.alpha = 1;
		t.bottom = 15;
		t.label = "ok";
		t.left = 20;
		t.width = 100;
		t.x = 150;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.alpha = 1;
		t.bottom = 15;
		t.label = "close";
		t.right = 15;
		t.width = 100;
		return t;
	};
	_proto.tipsLabel_i = function () {
		var t = new eui.Label();
		this.tipsLabel = t;
		t.bottom = 75;
		t.left = 20;
		t.multiline = true;
		t.right = 20;
		t.size = 20;
		t.text = "Label";
		t.textColor = 0x2c83d4;
		t.top = 160;
		t.wordWrap = true;
		return t;
	};
	_proto.descriptLabel_i = function () {
		var t = new eui.EditableText();
		this.descriptLabel = t;
		t.height = 90;
		t.left = "20";
		t.multiline = true;
		t.right = "20";
		t.size = 25;
		t.text = "Label";
		t.textColor = 0x2c83d4;
		t.top = "65";
		t.wordWrap = true;
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PoolListItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
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
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this.labelDisplay,"text")
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/PoolPathNodeSkin.exml'] = window.PoolPathNodeSkin = (function (_super) {
	__extends(PoolPathNodeSkin, _super);
	function PoolPathNodeSkin() {
		_super.call(this);
		this.skinParts = ["bgRect","nameLabel"];
		
		this.height = 100;
		this.minHeight = 100;
		this.minWidth = 100;
		this.width = 100;
		this.elementsContent = [this.bgRect_i(),this.nameLabel_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("bgRect","fillColor",0x642e75)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = PoolPathNodeSkin.prototype;

	_proto.bgRect_i = function () {
		var t = new eui.Rect();
		this.bgRect = t;
		t.bottom = 0;
		t.fillColor = 0x2ca5d3;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.width = 100;
		return t;
	};
	_proto.nameLabel_i = function () {
		var t = new eui.Label();
		this.nameLabel = t;
		t.bottom = 15;
		t.horizontalCenter = 0;
		t.multiline = true;
		t.size = 13;
		t.text = "";
		t.wordWrap = true;
		return t;
	};
	return PoolPathNodeSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/QuoteChartSkin.exml'] = window.QuoteChartSkin = (function (_super) {
	__extends(QuoteChartSkin, _super);
	function QuoteChartSkin() {
		_super.call(this);
		this.skinParts = ["chartTabBar","chartRect","chartGroup"];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this._Rect1_i(),this.chartTabBar_i(),this.chartGroup_i()];
	}
	var _proto = QuoteChartSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xf6fbfd;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chartTabBar_i = function () {
		var t = new eui.TabBar();
		this.chartTabBar = t;
		t.height = 40;
		t.left = 0;
		t.right = 0;
		t.y = 0;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.columnAlign = "left";
		t.horizontalGap = 5;
		t.requestedRowCount = 1;
		t.rowAlign = "justifyUsingHeight";
		t.rowHeight = 40;
		return t;
	};
	_proto.chartGroup_i = function () {
		var t = new eui.Group();
		this.chartGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 50;
		t.elementsContent = [this.chartRect_i()];
		return t;
	};
	_proto.chartRect_i = function () {
		var t = new eui.Rect();
		this.chartRect = t;
		t.bottom = 0;
		t.fillColor = 0xd8d8d8;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0x423737;
		t.top = 0;
		t.x = -12;
		t.y = -5;
		return t;
	};
	return QuoteChartSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/QuoteDataGroupRenderSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["signLabel","qualityLabel","priceLabel","tradeButton"];
		
		this.height = 55;
		this.minHeight = 50;
		this.minWidth = 200;
		this.width = 400;
		this.elementsContent = [this._Image1_i(),this._Group5_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 25;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.signLabel_i()];
		return t;
	};
	_proto.signLabel_i = function () {
		var t = new eui.Label();
		this.signLabel = t;
		t.horizontalCenter = 0;
		t.size = 15;
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 25;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.qualityLabel_i()];
		return t;
	};
	_proto.qualityLabel_i = function () {
		var t = new eui.Label();
		this.qualityLabel = t;
		t.horizontalCenter = 0;
		t.size = 15;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 25;
		t.x = 10;
		t.y = 10;
		t.elementsContent = [this.priceLabel_i()];
		return t;
	};
	_proto.priceLabel_i = function () {
		var t = new eui.Label();
		this.priceLabel = t;
		t.horizontalCenter = 0;
		t.size = 15;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 25;
		t.x = 20;
		t.y = 20;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.tradeButton_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.tradeButton_i = function () {
		var t = new eui.Button();
		this.tradeButton = t;
		t.height = 50;
		t.label = "交易";
		t.width = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/QuoteGroupSkin.exml'] = window.QuoteGroupSkin = (function (_super) {
	__extends(QuoteGroupSkin, _super);
	function QuoteGroupSkin() {
		_super.call(this);
		this.skinParts = ["quoteTabBar","quoteDataGroup"];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = QuoteGroupSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this.quoteTabBar_i(),this.quoteDataGroup_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.quoteTabBar_i = function () {
		var t = new eui.TabBar();
		this.quoteTabBar = t;
		t.height = 40;
		t.left = 0;
		t.right = 0;
		t.y = 4;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.columnAlign = "justifyUsingWidth";
		t.horizontalGap = 15;
		t.orientation = "rows";
		t.requestedRowCount = 1;
		t.rowHeight = 40;
		return t;
	};
	_proto.quoteDataGroup_i = function () {
		var t = new eui.DataGroup();
		this.quoteDataGroup = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 50;
		t.layout = this._TileLayout2_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._TileLayout2_i = function () {
		var t = new eui.TileLayout();
		t.columnAlign = "justifyUsingWidth";
		t.horizontalGap = 0;
		t.orientation = "rows";
		t.requestedColumnCount = 1;
		t.verticalGap = 1;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	return QuoteGroupSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/QuotePanelSkin2.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","updateLabel","moveArea","poolsButton","trendButton","helpButton","languageButton","quoteTabBar","quoteDataGroup"];
		
		this.height = 350;
		this.minHeight = 230;
		this.minWidth = 450;
		this.width = 500;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this._Group1_i(),this.quoteTabBar_i(),this.quoteDataGroup_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 400;
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
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i(),this.updateLabel_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.source = "header_png";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 15;
		t.size = 20;
		t.text = "";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.updateLabel_i = function () {
		var t = new eui.Label();
		this.updateLabel = t;
		t.fontFamily = "Tahoma";
		t.right = 15;
		t.size = 14;
		t.text = "";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.left = 25;
		t.right = 25;
		t.top = 55;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this.poolsButton_i(),this.trendButton_i(),this.helpButton_i(),this.languageButton_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.columnAlign = "justifyUsingWidth";
		t.horizontalGap = 10;
		t.orientation = "rows";
		t.requestedRowCount = 1;
		t.rowHeight = 40;
		return t;
	};
	_proto.poolsButton_i = function () {
		var t = new eui.Button();
		this.poolsButton = t;
		t.label = "←";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.trendButton_i = function () {
		var t = new eui.Button();
		this.trendButton = t;
		t.label = "走势图";
		t.x = 221;
		t.y = 0;
		return t;
	};
	_proto.helpButton_i = function () {
		var t = new eui.Button();
		this.helpButton = t;
		t.label = "Help";
		t.x = 335;
		t.y = 0;
		return t;
	};
	_proto.languageButton_i = function () {
		var t = new eui.Button();
		this.languageButton = t;
		t.label = "A↔文";
		t.x = 110;
		t.y = 0;
		return t;
	};
	_proto.quoteTabBar_i = function () {
		var t = new eui.TabBar();
		this.quoteTabBar = t;
		t.height = 40;
		t.left = 25;
		t.right = 25;
		t.top = 105;
		t.layout = this._TileLayout2_i();
		return t;
	};
	_proto._TileLayout2_i = function () {
		var t = new eui.TileLayout();
		t.columnAlign = "justifyUsingWidth";
		t.horizontalGap = 5;
		t.requestedRowCount = 1;
		t.rowHeight = 40;
		return t;
	};
	_proto.quoteDataGroup_i = function () {
		var t = new eui.DataGroup();
		this.quoteDataGroup = t;
		t.bottom = 80;
		t.left = 25;
		t.right = 25;
		t.top = 155;
		t.layout = this._TileLayout3_i();
		return t;
	};
	_proto._TileLayout3_i = function () {
		var t = new eui.TileLayout();
		t.columnAlign = "justifyUsingWidth";
		t.requestedColumnCount = 1;
		t.verticalGap = 5;
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/RunPartSkin.exml'] = window.RunPartSkin = (function (_super) {
	__extends(RunPartSkin, _super);
	function RunPartSkin() {
		_super.call(this);
		this.skinParts = ["leftButton","rightButton"];
		
		this.height = 50;
		this.width = 400;
		this.elementsContent = [this.leftButton_i(),this.rightButton_i()];
	}
	var _proto = RunPartSkin.prototype;

	_proto.leftButton_i = function () {
		var t = new eui.Button();
		this.leftButton = t;
		t.label = "↑";
		t.left = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto.rightButton_i = function () {
		var t = new eui.Button();
		this.rightButton = t;
		t.label = "↓";
		t.right = 0;
		t.verticalCenter = 0;
		return t;
	};
	return RunPartSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
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
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ShopListItemRendererSkin.exml'] = window.ShopListItemRendererSkin = (function (_super) {
	__extends(ShopListItemRendererSkin, _super);
	function ShopListItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","buyItem"];
		
		this.minHeight = 120;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.buyItem_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this.labelDisplay,"text")
	}
	var _proto = ShopListItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
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
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.buyItem_i = function () {
		var t = new eui.Button();
		this.buyItem = t;
		t.bottom = 5;
		t.percentHeight = 20;
		t.horizontalCenter = 0;
		t.label = "Button";
		t.percentWidth = 30;
		return t;
	};
	return ShopListItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ShopPanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","moveLeftButton","moveRightButton","pageIndexInputer","buttonGroup","shopList","naviUpButton","shopTabBar","naviDownButton","poolsButton","myItemButton","helpButton","languageButton"];
		
		this.height = 450;
		this.minHeight = 230;
		this.minWidth = 450;
		this.width = 500;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this._Group2_i(),this._Group3_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 400;
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
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
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
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.bottom = 85;
		t.left = 15;
		t.right = 15;
		t.top = 120;
		t.layout = this._BasicLayout2_i();
		t.elementsContent = [this.buttonGroup_i(),this.shopList_i(),this._Group1_i()];
		return t;
	};
	_proto._BasicLayout2_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.buttonGroup_i = function () {
		var t = new eui.Group();
		this.buttonGroup = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this.moveLeftButton_i(),this.moveRightButton_i(),this.pageIndexInputer_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.moveLeftButton_i = function () {
		var t = new eui.Button();
		this.moveLeftButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.label = "<";
		t.left = 0;
		t.width = 100;
		t.y = 0;
		return t;
	};
	_proto.moveRightButton_i = function () {
		var t = new eui.Button();
		this.moveRightButton = t;
		t.height = 50;
		t.label = ">";
		t.right = 0;
		t.width = 100;
		t.y = 0;
		return t;
	};
	_proto.pageIndexInputer_i = function () {
		var t = new eui.TextInput();
		this.pageIndexInputer = t;
		t.height = 50;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 100;
		return t;
	};
	_proto.shopList_i = function () {
		var t = new eui.List();
		this.shopList = t;
		t.bottom = 65;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.top = 65;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.columnAlign = "justifyUsingWidth";
		t.horizontalGap = 5;
		t.orientation = "rows";
		t.requestedColumnCount = 3;
		t.rowAlign = "top";
		t.rowHeight = 55;
		t.verticalGap = 5;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.naviUpButton_i(),this.shopTabBar_i(),this.naviDownButton_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 5;
		return t;
	};
	_proto.naviUpButton_i = function () {
		var t = new eui.Button();
		this.naviUpButton = t;
		t.label = "<";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shopTabBar_i = function () {
		var t = new eui.TabBar();
		this.shopTabBar = t;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.includeInLayout = true;
		t.scrollEnabled = true;
		t.useVirtualLayout = true;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._TileLayout2_i();
		return t;
	};
	_proto._TileLayout2_i = function () {
		var t = new eui.TileLayout();
		t.requestedRowCount = 1;
		return t;
	};
	_proto.naviDownButton_i = function () {
		var t = new eui.Button();
		this.naviDownButton = t;
		t.label = ">";
		t.x = 370;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.left = 15;
		t.right = 15;
		t.top = 55;
		t.layout = this._TileLayout3_i();
		t.elementsContent = [this.poolsButton_i(),this.myItemButton_i(),this.helpButton_i(),this.languageButton_i()];
		return t;
	};
	_proto._TileLayout3_i = function () {
		var t = new eui.TileLayout();
		t.columnAlign = "justifyUsingWidth";
		t.horizontalGap = 25;
		t.orientation = "rows";
		t.requestedRowCount = 1;
		t.rowHeight = 50;
		return t;
	};
	_proto.poolsButton_i = function () {
		var t = new eui.Button();
		this.poolsButton = t;
		t.label = "←";
		t.left = 0;
		t.y = 0;
		return t;
	};
	_proto.myItemButton_i = function () {
		var t = new eui.Button();
		this.myItemButton = t;
		t.label = "我的道具";
		t.x = 149;
		t.y = 1;
		return t;
	};
	_proto.helpButton_i = function () {
		var t = new eui.Button();
		this.helpButton = t;
		t.height = 50;
		t.label = "帮助";
		t.right = 0;
		t.y = 1;
		return t;
	};
	_proto.languageButton_i = function () {
		var t = new eui.Button();
		this.languageButton = t;
		t.height = 50;
		t.label = "LLL";
		t.x = 270;
		t.y = 3;
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ShopShowPanelSkin.exml'] = window.ShopShowPanelSkin = (function (_super) {
	__extends(ShopShowPanelSkin, _super);
	function ShopShowPanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton","itemNameLabel","itemPriceLabel","itemDescriptionLabel","buyButton","notBuyButton"];
		
		this.maxWidth = 450;
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i(),this._Group1_i(),this.buyButton_i(),this.notBuyButton_i()];
	}
	var _proto = ShopShowPanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 250;
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
		t.alpha = 1;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		t.visible = false;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.left = 25;
		t.right = 25;
		t.y = 55;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.itemNameLabel_i(),this.itemPriceLabel_i(),this.itemDescriptionLabel_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 15;
		t.horizontalAlign = "left";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.itemNameLabel_i = function () {
		var t = new eui.Label();
		this.itemNameLabel = t;
		t.size = 20;
		t.text = "商品名字";
		t.textColor = 0x2c83d4;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.itemPriceLabel_i = function () {
		var t = new eui.Label();
		this.itemPriceLabel = t;
		t.size = 20;
		t.text = "只需";
		t.textColor = 0x2c83d4;
		t.x = 0;
		t.y = 60;
		return t;
	};
	_proto.itemDescriptionLabel_i = function () {
		var t = new eui.Label();
		this.itemDescriptionLabel = t;
		t.height = 54;
		t.multiline = true;
		t.size = 18;
		t.text = "商品描述";
		t.textAlign = "left";
		t.textColor = 0x2c83d4;
		t.verticalAlign = "top";
		t.percentWidth = 100;
		t.wordWrap = true;
		t.x = 0;
		t.y = 29;
		return t;
	};
	_proto.buyButton_i = function () {
		var t = new eui.Button();
		this.buyButton = t;
		t.bottom = 15;
		t.height = 50;
		t.label = "买买买";
		t.left = 25;
		t.width = 100;
		return t;
	};
	_proto.notBuyButton_i = function () {
		var t = new eui.Button();
		this.notBuyButton = t;
		t.bottom = 15;
		t.label = "看看而已";
		t.right = 25;
		return t;
	};
	return ShopShowPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ShotMessagePanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton","messageLabel"];
		
		this.height = 270;
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i(),this.messageLabel_i()];
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
		t.alpha = 1;
		t.bottom = 15;
		t.horizontalCenter = 0;
		t.label = "close";
		t.visible = true;
		return t;
	};
	_proto.messageLabel_i = function () {
		var t = new eui.EditableText();
		this.messageLabel = t;
		t.bottom = "75";
		t.left = "20";
		t.multiline = true;
		t.right = "20";
		t.size = 20;
		t.text = "Label";
		t.textColor = 0x2c83d4;
		t.top = "60";
		t.wordWrap = true;
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/SoundPanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton","volumnBar"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i(),this.volumnBar_i()];
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
		t.alpha = 1;
		t.bottom = 15;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	_proto.volumnBar_i = function () {
		var t = new eui.HSlider();
		this.volumnBar = t;
		t.enabled = true;
		t.height = 20;
		t.left = 30;
		t.liveDragging = true;
		t.maximum = 1;
		t.minimum = 0;
		t.right = 30;
		t.snapInterval = 0.01;
		t.y = 95;
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/StartPanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["closeButton","fishContainer","startButton","helpButton","clarifyButton","gameLabel","logoGroup"];
		
		this.height = 350;
		this.minHeight = 230;
		this.minWidth = 450;
		this.width = 500;
		this.elementsContent = [this._Image1_i(),this.closeButton_i(),this.fishContainer_i(),this._Group1_i(),this._Group2_i(),this._Label1_i(),this.logoGroup_i()];
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
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.alpha = 1;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		t.visible = false;
		return t;
	};
	_proto.fishContainer_i = function () {
		var t = new eui.Component();
		this.fishContainer = t;
		t.bottom = 50;
		t.height = 20;
		t.right = 50;
		t.width = 20;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 50;
		t.horizontalCenter = 0;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.startButton_i(),this.helpButton_i(),this.clarifyButton_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 5;
		return t;
	};
	_proto.startButton_i = function () {
		var t = new eui.Button();
		this.startButton = t;
		t.label = "开始";
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.helpButton_i = function () {
		var t = new eui.Button();
		this.helpButton = t;
		t.label = "帮助";
		t.width = 200;
		t.x = 2;
		t.y = 61;
		return t;
	};
	_proto.clarifyButton_i = function () {
		var t = new eui.Button();
		this.clarifyButton = t;
		t.label = "声明";
		t.width = 200;
		t.x = 1;
		t.y = 119;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.top = 100;
		t.layout = this._VerticalLayout2_i();
		t.elementsContent = [this.gameLabel_i()];
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 45;
		t.horizontalAlign = "center";
		return t;
	};
	_proto.gameLabel_i = function () {
		var t = new eui.Label();
		this.gameLabel = t;
		t.bold = true;
		t.text = "有鱼上钩!";
		t.textColor = 0x2c83d4;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bottom = 50;
		t.left = 20;
		t.multiline = true;
		t.size = 12;
		t.text = "Version: HFG 0.0.3\n\nAllRights.";
		t.textColor = 0x2c83d4;
		t.wordWrap = true;
		return t;
	};
	_proto.logoGroup_i = function () {
		var t = new eui.Group();
		this.logoGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
		t.elementsContent = [this._Image2_i(),this._Group3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.bottom = 20;
		t.horizontalCenter = 0;
		t.top = 20;
		t.visible = false;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this._Image3_i(),this._Label2_i(),this._EditableText1_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 200;
		t.horizontalCenter = 0;
		t.source = "";
		t.top = 0;
		t.visible = false;
		t.width = 200;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.left = 0;
		t.right = 0;
		t.text = "无眠夜游偶遇江中孤瓶";
		t.textAlign = "center";
		t.textColor = 0x2c83d4;
		t.top = 215;
		t.visible = false;
		return t;
	};
	_proto._EditableText1_i = function () {
		var t = new eui.EditableText();
		t.bold = true;
		t.bottom = "0";
		t.fontFamily = "Tahoma";
		t.left = "0";
		t.multiline = true;
		t.right = "0";
		t.size = 25;
		t.text = "孤瓶泊流水 匆匆摆不归\n无边无际远 何处何曾追";
		t.textAlign = "center";
		t.textColor = 0x2c83d4;
		t.top = "250";
		t.verticalAlign = "justify";
		t.wordWrap = true;
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TalkFishWindowSkin.exml'] = window.TalkFishWindowSkin = (function (_super) {
	__extends(TalkFishWindowSkin, _super);
	function TalkFishWindowSkin() {
		_super.call(this);
		this.skinParts = ["talkField"];
		
		this.height = 80;
		this.width = 200;
		this.elementsContent = [this.talkField_i()];
	}
	var _proto = TalkFishWindowSkin.prototype;

	_proto.talkField_i = function () {
		var t = new eui.EditableText();
		this.talkField = t;
		t.background = false;
		t.backgroundColor = 0x22aa44;
		t.percentHeight = 100;
		t.left = "0";
		t.multiline = true;
		t.size = 12;
		t.textColor = 0x000000;
		t.top = "0";
		t.touchEnabled = false;
		t.percentWidth = 100;
		t.wordWrap = true;
		return t;
	};
	return TalkFishWindowSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
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

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/TradePanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton","sellButton","cancelSellButton","fishSellInfo","minusButton","countInput","plusButton","allButton","incomeLabel","haveFishLabel"];
		
		this.currentState = "quote";
		this.height = 350;
		this.minHeight = 230;
		this.minWidth = 450;
		this.width = 500;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i(),this._Group2_i()];
		this.sellButton_i();
		
		this.cancelSellButton_i();
		
		this.countInput_i();
		
		this._Group1_i();
		
		this.haveFishLabel_i();
		
		this.states = [
			new eui.State ("quote",
				[
					new eui.AddItems("sellButton","",2,"_Group2"),
					new eui.AddItems("cancelSellButton","",2,"_Group2"),
					new eui.AddItems("countInput","_Group1",2,"plusButton"),
					new eui.AddItems("_Group1","_Group2",2,"incomeLabel"),
					new eui.AddItems("haveFishLabel","_Group2",1,"")
				])
		];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 250;
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
		t.alpha = 1;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		t.visible = false;
		return t;
	};
	_proto.sellButton_i = function () {
		var t = new eui.Button();
		this.sellButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 15;
		t.height = 50;
		t.label = "卖";
		t.left = 30;
		t.width = 100;
		return t;
	};
	_proto.cancelSellButton_i = function () {
		var t = new eui.Button();
		this.cancelSellButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 15;
		t.height = 50;
		t.label = "不卖";
		t.right = 30;
		t.width = 100;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		this._Group2 = t;
		t.bottom = 80;
		t.left = 20;
		t.right = 20;
		t.top = 55;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.fishSellInfo_i(),this.incomeLabel_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.fishSellInfo_i = function () {
		var t = new FishSellInfo();
		this.fishSellInfo = t;
		t.height = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.x = 123;
		t.y = 39;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.minusButton_i(),this.plusButton_i(),this.allButton_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		return t;
	};
	_proto.minusButton_i = function () {
		var t = new eui.Button();
		this.minusButton = t;
		t.height = 50;
		t.label = "-";
		t.width = 50;
		t.x = 281;
		t.y = 95;
		return t;
	};
	_proto.countInput_i = function () {
		var t = new eui.TextInput();
		this.countInput = t;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 50;
		t.maxChars = 4;
		t.restrict = "0-9";
		t.text = "1";
		t.textColor = 0x2c83d4;
		t.width = 75;
		t.x = 42;
		t.y = 0;
		return t;
	};
	_proto.plusButton_i = function () {
		var t = new eui.Button();
		this.plusButton = t;
		t.label = "+";
		t.width = 50;
		t.x = 93;
		t.y = 91;
		return t;
	};
	_proto.allButton_i = function () {
		var t = new eui.Button();
		this.allButton = t;
		t.label = "Button";
		t.x = 174;
		t.y = 2;
		return t;
	};
	_proto.incomeLabel_i = function () {
		var t = new eui.Label();
		this.incomeLabel = t;
		t.height = 12;
		t.multiline = true;
		t.size = 12;
		t.text = "预计收入";
		t.textAlign = "center";
		t.textColor = 0x2c83d4;
		t.percentWidth = 100;
		t.wordWrap = true;
		t.x = 175;
		t.y = 96;
		return t;
	};
	_proto.haveFishLabel_i = function () {
		var t = new eui.Label();
		this.haveFishLabel = t;
		t.size = 20;
		t.text = "当前持有数量";
		t.textColor = 0x2c83d4;
		t.x = 190;
		t.y = 126;
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TrendPanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton","quoteChart"];
		
		this.height = 400;
		this.minHeight = 230;
		this.minWidth = 650;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i(),this.quoteChart_i()];
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
		t.alpha = 1;
		t.bottom = 15;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	_proto.quoteChart_i = function () {
		var t = new QuoteChart();
		this.quoteChart = t;
		t.bottom = 80;
		t.left = 15;
		t.right = 15;
		t.top = 60;
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TrendTabItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
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
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
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
		t.size = 14;
		t.text = "x";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UnderBarSkin.exml'] = window.UnderBarSkin = (function (_super) {
	__extends(UnderBarSkin, _super);
	function UnderBarSkin() {
		_super.call(this);
		this.skinParts = ["leftButton","rightButton"];
		
		this.height = 30;
		this.width = 400;
		this.elementsContent = [this.leftButton_i(),this.rightButton_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("leftButton","alpha",0.5),
					new eui.SetProperty("rightButton","alpha",0.5)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = UnderBarSkin.prototype;

	_proto.leftButton_i = function () {
		var t = new eui.Label();
		this.leftButton = t;
		t.border = true;
		t.height = 30;
		t.left = 0;
		t.text = "-";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.top = 0;
		t.touchEnabled = true;
		t.verticalAlign = "middle";
		t.width = 40;
		return t;
	};
	_proto.rightButton_i = function () {
		var t = new eui.Label();
		this.rightButton = t;
		t.border = true;
		t.height = 30;
		t.right = 0;
		t.text = "+";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.top = 0;
		t.touchEnabled = true;
		t.verticalAlign = "middle";
		t.width = 40;
		return t;
	};
	return UnderBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VividBarSkin.exml'] = window.VividBarSkin = (function (_super) {
	__extends(VividBarSkin, _super);
	function VividBarSkin() {
		_super.call(this);
		this.skinParts = ["vividImage","nickLabel","scoreLabel"];
		
		this.height = 70;
		this.minHeight = 70;
		this.minWidth = 500;
		this.width = 300;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
	}
	var _proto = VividBarSkin.prototype;

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
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.left = 15;
		t.top = 10;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.vividImage_i(),this.nickLabel_i(),this.scoreLabel_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 25;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.vividImage_i = function () {
		var t = new eui.Image();
		this.vividImage = t;
		t.fillMode = "scale";
		t.height = 50;
		t.width = 50;
		t.x = 0;
		t.y = 7;
		return t;
	};
	_proto.nickLabel_i = function () {
		var t = new eui.Label();
		this.nickLabel = t;
		t.size = 20;
		t.text = "昵称";
		t.textColor = 0x2c83d4;
		t.x = 38;
		t.y = 2;
		return t;
	};
	_proto.scoreLabel_i = function () {
		var t = new eui.Label();
		this.scoreLabel = t;
		t.size = 20;
		t.text = "分数";
		t.textColor = 0x2c83d4;
		t.x = 110;
		t.y = 0;
		return t;
	};
	return VividBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VividListItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.minHeight = 50;
		this.minWidth = 50;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.8)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.thumb"],[0],this._Image1,"source")
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.percentWidth = 100;
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VividPanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","vividLabel","vividList","nickLabel","nickInput","randomNickNameButton","okButton","languageButton"];
		
		this.height = 450;
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this._Group1_i()];
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
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
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
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.top = 70;
		t.elementsContent = [this.vividLabel_i(),this.vividList_i(),this.nickLabel_i(),this.nickInput_i(),this.randomNickNameButton_i(),this.okButton_i(),this.languageButton_i()];
		return t;
	};
	_proto.vividLabel_i = function () {
		var t = new eui.Label();
		this.vividLabel = t;
		t.size = 20;
		t.textColor = 0x2c83d4;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.vividList_i = function () {
		var t = new eui.List();
		this.vividList = t;
		t.height = 50;
		t.width = 250;
		t.x = 0;
		t.y = 35;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 1;
		return t;
	};
	_proto.nickLabel_i = function () {
		var t = new eui.Label();
		this.nickLabel = t;
		t.size = 20;
		t.textColor = 0x2c83d4;
		t.x = 0;
		t.y = 110;
		return t;
	};
	_proto.nickInput_i = function () {
		var t = new eui.TextInput();
		this.nickInput = t;
		t.height = 50;
		t.maxChars = 10;
		t.width = 200;
		t.x = 0;
		t.y = 145;
		return t;
	};
	_proto.randomNickNameButton_i = function () {
		var t = new eui.Button();
		this.randomNickNameButton = t;
		t.x = 230;
		t.y = 145;
		return t;
	};
	_proto.okButton_i = function () {
		var t = new eui.Button();
		this.okButton = t;
		t.x = 4;
		t.y = 215;
		return t;
	};
	_proto.languageButton_i = function () {
		var t = new eui.Button();
		this.languageButton = t;
		t.label = "LLL";
		t.x = 130;
		t.y = 215;
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
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
})(eui.Skin);