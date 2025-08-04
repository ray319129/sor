document.addEventListener('DOMContentLoaded', function() {
    const pinkButton = document.getElementById('pink-button');
    const blueButton = document.getElementById('blue-button');
    const title = document.getElementById('title');
    const mainImage = document.getElementById('main-image');
    const buttonsContainer = document.getElementById('buttons-container');
    
    let blueButtonClickCount = 0;
    const blueButtonTexts = [
        "我才不要",
        "對不起麻 我知道錯了",
        "帶你去吃韓式料理",
        "給我個台階麻寶寶",
        "給我個台階麻寶寶 拜託拜託拜託"
    ];
    
    // 藍色按鈕點擊事件
    blueButton.addEventListener('click', function() {
        blueButtonClickCount++;
        
        // 粉色按鈕放大動畫
        pinkButton.classList.add('grow');
        setTimeout(() => {
            pinkButton.classList.remove('grow');
        }, 500);
        
        // 更新藍色按鈕文字
        if (blueButtonClickCount < blueButtonTexts.length) {
            blueButton.textContent = blueButtonTexts[blueButtonClickCount];
        }
    });
    
    // 粉色按鈕點擊事件
    pinkButton.addEventListener('click', function() {
        // 按鈕消失動畫
        buttonsContainer.classList.add('fade-out');
        
        setTimeout(() => {
            buttonsContainer.style.display = 'none';
            
            // 更新標題
            title.textContent = "嘿嘿 最愛你了寶寶";
            title.classList.add('change');
            
            // 更新圖片
            mainImage.src = "image2.png";
            
            // 移除標題動畫類
            setTimeout(() => {
                title.classList.remove('change');
            }, 500);
            
        }, 500);
    });
    
    // 添加一些可愛的互動效果
    mainImage.addEventListener('click', function() {
        this.style.transform = 'scale(1.1)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
    
    // 添加按鈕懸停音效（可選）
    function addButtonHoverEffect(button) {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    addButtonHoverEffect(pinkButton);
    addButtonHoverEffect(blueButton);
}); 