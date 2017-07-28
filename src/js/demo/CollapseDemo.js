!(function(name, context, definition) {
    'use strict';
    if (typeof define === "function" && define.amd) {
        define(definition);
    } else {
        context[name] = definition();
    }
})("CollapseDemo", this, function() {
    'use strict';
    var collapseDemo = {
        path: '/collapse',
        name: 'collapse',
        head: {
            label: 'Collapse 折叠面板',
            description: '通过折叠面板收纳内容区域'
        },
        samples: [{
            id: 'collapse1',
            label: '基本用法',
            description: '可同时展开多个面板，面板之间不影响',
            template: '<div class="source"><vue-collapse v-model="activeNames"><vue-collapse-item title="一致性 Consistency" name="1"><div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div><div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div></vue-collapse-item><vue-collapse-item title="反馈 Feedback" name="2"><div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div><div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div></vue-collapse-item><vue-collapse-item title="效率 Efficiency" name="3"><div>简化流程：设计简洁直观的操作流程；</div><div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div><div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div></vue-collapse-item><vue-collapse-item title="可控 Controllability" name="4"><div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div><div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div></vue-collapse-item></vue-collapse></div>',
            parameter: {
                data: function() {
                  return {
                    activeNames: ['1']
                  }
                }
            },
            code: '<vue-collapse v-model="activeNames">\n'+
            '    <vue-collapse-item title="一致性 Consistency" name="1">\n'+
            '        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>\n'+
            '        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>\n'+
            '    </vue-collapse-item>\n'+
            '    <vue-collapse-item title="反馈 Feedback" name="2">\n'+
            '        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>\n'+
            '        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>\n'+
            '    </vue-collapse-item>\n'+
            '    <vue-collapse-item title="效率 Efficiency" name="3">\n'+
            '        <div>简化流程：设计简洁直观的操作流程；</div>\n'+
            '        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>\n'+
            '        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>\n'+
            '    </vue-collapse-item>\n'+
            '    <vue-collapse-item title="可控 Controllability" name="4">\n'+
            '        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>\n'+
            '        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>\n'+
            '    </vue-collapse-item>\n'+
            '</vue-collapse>\n\n'+
            '<script>\n'+
            '    new Vue({\n'+
            '        data: function() {\n'+
            '            return: {\n'+
            '                activeNames: [\'1\']\n'+
            '            }\n'+
            '        }\n'+
            '    }).$mount();\n'+
            '</script>'
        },{
            id: 'collapse2',
            label: '手风琴效果',
            description: '每次只能展开一个面板, 通过 accordion 属性来设置是否以手风琴模式显示',
            template: '<div class="source"><vue-collapse v-model="activeNames" accordion><vue-collapse-item title="一致性 Consistency" name="1"><div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div><div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div></vue-collapse-item><vue-collapse-item title="反馈 Feedback" name="2"><div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div><div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div></vue-collapse-item><vue-collapse-item title="效率 Efficiency" name="3"><div>简化流程：设计简洁直观的操作流程；</div><div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div><div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div></vue-collapse-item><vue-collapse-item title="可控 Controllability" name="4"><div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div><div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div></vue-collapse-item></vue-collapse></div>',
            parameter: {
                data: function() {
                  return {
                    activeNames: ['1']
                  }
                }
            },
            code: '<vue-collapse v-model="activeNames" accordion>\n'+
            '    <vue-collapse-item title="一致性 Consistency" name="1">\n'+
            '        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>\n'+
            '        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>\n'+
            '    </vue-collapse-item>\n'+
            '    <vue-collapse-item title="反馈 Feedback" name="2">\n'+
            '        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>\n'+
            '        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>\n'+
            '    </vue-collapse-item>\n'+
            '    <vue-collapse-item title="效率 Efficiency" name="3">\n'+
            '        <div>简化流程：设计简洁直观的操作流程；</div>\n'+
            '        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>\n'+
            '        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>\n'+
            '    </vue-collapse-item>\n'+
            '    <vue-collapse-item title="可控 Controllability" name="4">\n'+
            '        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>\n'+
            '        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>\n'+
            '    </vue-collapse-item>\n'+
            '</vue-collapse>\n\n'+
            '<script>\n'+
            '    new Vue({\n'+
            '        data: function() {\n'+
            '            return: {\n'+
            '                activeNames: [\'1\']\n'+
            '            }\n'+
            '        }\n'+
            '    }).$mount();\n'+
            '</script>'
        }]
    };
    return collapseDemo;
});

