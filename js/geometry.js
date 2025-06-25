document.addEventListener('DOMContentLoaded', () => {
    let currentStep = 0;
    const steps = [
        { title: '第零步：哲学思辨', description: '...', setup: setupStep1 },
        { title: '第一步：集合', description: '...', setup: setupStep2 },
        { title: '第二步：拓扑结构', description: '...', setup: setupStep3 },
        // ... etc.
    ];

    const titleEl = document.getElementById('step-title');
    const descriptionEl = document.getElementById('step-description');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');

    function updateStep(stepIndex) {
        currentStep = stepIndex;
        const stepData = steps[currentStep];
        titleEl.textContent = stepData.title;
        descriptionEl.textContent = stepData.description;
        
        // 清理旧的可视化并设置新的
        clearVisualization(); 
        stepData.setup(); 
    }

    nextBtn.addEventListener('click', () => {
        if (currentStep < steps.length - 1) {
            updateStep(currentStep + 1);
        }
    });

    // ... 实现 prevBtn 的逻辑 ...

    // 初始化
    updateStep(0);
});

function clearVisualization() {
    // 移除旧的canvas或清理内容
}

// 示例：第一步的实现
function setupStep1() {
    // 使用 p5.js
    new p5(sketch => {
        let points = [];
        sketch.setup = () => {
            let canvas = sketch.createCanvas(600, 400);
            canvas.parent('visualization-canvas'); // 嵌入到div中
            for(let i = 0; i < 200; i++) {
                points.push(sketch.createVector(sketch.random(sketch.width), sketch.random(sketch.height)));
            }
        };

        sketch.draw = () => {
            sketch.background(255);
            sketch.stroke(0);
            sketch.strokeWeight(4);
            points.forEach(p => sketch.point(p.x, p.y));
        };
        
        sketch.mousePressed = () => {
            points.push(sketch.createVector(sketch.mouseX, sketch.mouseY));
        }
    });
}