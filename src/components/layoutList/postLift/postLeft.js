import React, {Component} from 'react';

import './postLeft.css';

class postLeft extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            item: [
                {
                    id: 1,
                    title: '你看我秀不秀?',
                    content: '故事的小黄花 从出生那年就飘着 童年的荡秋千 随记忆一直晃到现在 吹着前奏 望着天空 我想起花瓣 试着掉落 为你翘课的那一天',
                    btnTitle: 'READ MORE',
                    updatedAt: '2018-12-12 12:22:45'
                },
                {
                    id: 2,
                    title: '晴天',
                    content: '故事的小黄花 从出生那年就飘着 童年的荡秋千 随记忆一直晃到现在 吹着前奏 望着天空 我想起花瓣 试着掉落 为你翘课的那一天',
                    btnTitle: 'READ MORE',
                    updatedAt: '2018-12-12 12:22:45'
                },
                {
                    id: 3,
                    title: '枫叶',
                    content: '乌云在我们心里 搁下一块阴影 我聆听沉寂已久的心情 清晰透明 就像美丽的风景 总在回忆里才看得清 被伤透的心 能不能够继续爱我',
                    btnTitle: 'READ MORE',
                    updatedAt: '2018-12-12 12:22:45'
                },
                {
                    id: 4,
                    title: '心雨',
                    content: '橡树的绿叶啊 白色的竹篱笆 好想告诉我的她 这里像幅画 去年的圣诞卡 镜子里的胡渣 画面开始没有她 我还在装傻噢',
                    btnTitle: 'READ MORE',
                    updatedAt: '2018-12-12 12:22:45'
                },
            ]
        };
    }

    render() {
        return (
            <div>
                {
                    this.state.item.map((item, key) => {
                        return (
                            <div className={'div-content-left'} key={key}>
                                <div className={'div-content status_list_item'}>
                                    <div className={'status_user'}>
                                        <div className={'status-title'}>
                                            <span onClick={this.postInfo.bind(this, item.id)}
                                                  className={'title-post'}>
                                                {item.title} · <span className={'title-time'}>{item.updatedAt}</span>
                                            </span>
                                        </div>
                                        <div className={'status-content'}>{item.content}</div>
                                    </div>
                                    <div className={'post-footer'}>
                                        <a className={'btn-primry'} href={'http://www.baidu.com'}>{item.btnTitle}</a>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }

                <div className={'post-more'}>
                    <button className={'btn-primry btn-more'} onClick={this.postMore.bind(this)}>READ MORE</button>
                </div>
            </div>
        );
    }

    postInfo(id) {
        //进去详情界面
        this.props.history.push('/detail/' + id);
    }

    postMore() {
        console.log(this.state.search);
    }


}

export default postLeft;