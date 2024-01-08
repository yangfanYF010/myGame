const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = '';

    start () {
        // init logic
        this.label.string = "你好，世界第一帅";
        //ddd
    }
}
