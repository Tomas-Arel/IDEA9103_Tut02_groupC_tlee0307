let rings = [];
let ringConfigs = [];

function setup() {
    createCanvas(520, 520);
    noLoop();
    angleMode(RADIANS);

    ringConfigs = [
        { //number 1
            x: 70, y: 70,
            fillStyles: ['layered', 'layered', 'dots'],
            bgColors: [color('#909F9C'), color('#C253A0'), color('#D4F0FC')],
            patternColors: [
                [color('#7E9199'), color('#000000'), color('#16973A')],
                [color('#DF4526'), color('#196138'), color('#AC4494')],
                color('#030F7B')
            ],
            hasCurve: true,
            angle: PI / 4
        },{ //number 2
            x: 220,
            y: 35,
            fillStyles: ['layered', 'dots', 'zigzag'],
            bgColors: [color('#7E9199'), color('#E04B9F'), color('#FCB913')],
            patternColors: [
                [color('#7E9199'), color('#13894B'), color('#30412A')],
                color('#F55F1C'),
                color('#E81207')
            ],
            hasCurve: false,
            angle: PI / 3
        },{ //number 3
            x: 370,
            y: 0,
            fillStyles: ['layered', 'layered', 'dots'],
            bgColors: [color('#090200'), color('#D561B7'), color('#F9F8FE')],
            patternColors: [
                [color('#7E9199'), color('#000000'), color('#16973A')],
                [color('#DF4526'), color('#196138'), color('#971C19')],
                color('#F3352F')
            ],
            hasCurve: true,
            angle: PI / 3
        },{ //number 7
            x: 480,
            y: 100,
            fillStyles: ['layered', 'dots', 'dots'],
            bgColors: [color('#090200'), color('#D561B7'), color('#F8A529')],
            patternColors: [
                [color('#3A3E2A'), color('#E7373A'), color('#010005')],
                color('#FCD1F6'),
                color('#1E4271')
            ],
            hasCurve: false,
            angle: PI / 3
        },{ //number 4
            x: 30,
            y: 220,
            fillStyles: ['layered', 'dots', 'dots'],
            bgColors: [color('#758A73'), color('#D4429B'), color('#F7B437')],
            patternColors: [
                [color('#E34324'), color('#070300'), color('#565737')],
                color('#F64A2D'),
                color('#105093')
            ],
            hasCurve: false,
            angle: PI / 3
        },{ //number 5
            x: 180,
            y: 180,
            fillStyles: ['layered', 'layered', 'dots'],
            bgColors: [color('#464D2C'), color('#D143A3'), color('#DEFAFE')],
            patternColors: [
                [color('#040204'), color('#139126'), color('#CBD2CB')],
                [color('#F9472A'), color('#D249A7'), color('#D249A7')],
                color('#0E892F')
            ],
            hasCurve: true,
            angle: 5 * PI / 3
        },{ //number 6
            x: 335,
            y: 140,
            fillStyles: ['layered', 'layered', 'dots'],
            bgColors: [color('#A4AFB1'), color('#C8429C'), color('#FDB421')],
            patternColors: [
                [color('#030203'), color('#A1A4A1'), color('#474C3C')],
                [color('#70AAD6'), color('#C8429C'), color('#70AAD6')],
                color('#D299DE')
            ],
            hasCurve: false,
            angle: PI / 3
        },{ //number 8
            x: -20,
            y: 360,
            fillStyles: ['layered', 'layered', 'dots'],
            bgColors: [color('#304A3B'), color('#CC40A7'), color('#CCFCF8')],
            patternColors: [
                [color('#030203'), color('#A1A4A1'), color('#474C3C')],
                [color('#C8429C'), color('#C8429C'), color('#C73E9E')],
                color('#05938C')
            ],
            hasCurve: true,
            angle: 11 * PI / 6
        },{ //number 9
            x: 140,
            y: 320,
            fillStyles: ['layered', 'dots', 'zigzag'],
            bgColors: [color('#010103'), color('#FE5DB2'), color('#F6BB06')],
            patternColors: [
                [color('#E93C3E'), color('#A1A4A1'), color('#474C3C')],
                color('#F6090A'),
                color('#F6090A')
            ],
            hasCurve: false,
            angle: PI / 3
        },{ //number 10
            x: 290,
            y: 290,
            fillStyles: ['layered', 'zigzag', 'dots'],
            bgColors: [color('#F52241'), color('#ED58B9'), color('#F9FAFC')],
            patternColors: [
                [color('#2F9250'), color('#AC948E'), color('#F81D36'), color('#000000')],
                color('#F6090A'),
                color('#F6090A')
            ],
            hasCurve: true,
            angle: 0
        },{ //number 11
            x: 430,
            y: 250,
            fillStyles: ['layered', 'layered', 'dots'],
            bgColors: [color('#566140'), color('#BE5AA9'), color('#EDFDF9')],
            patternColors: [
                [color('#02851B'), color('#606148'), color('#001802')],
                [color('#BE5AA9'), color('#02851B')],
                color('#F47B1A')
            ],
            hasCurve: false,
            angle: PI / 3
        },{ //number 12
            x: 70,
            y: 480,
            fillStyles: ['layered', 'layered', 'dots'],
            bgColors: [color('#369D44'), color('#D455BC'), color('#FBFEF7')],
            patternColors: [
                [color('#6C9680'), color('#000000'), color('#2DA24E')],
                [color('#CF68C4'), color('#A5BAF9')],
                color('#F7190C')
            ],
            hasCurve: true,
            angle: PI / 6
        },{ //number 13
            x: 220,
            y: 440,
            fillStyles: ['layered', '606257', 'dots'],
            bgColors: [color('#010206'), color('#F66FD4'), color('#FDCB49')],
            patternColors: [
                [color('#DBC958'), color('#020202'), color('#2DA24E'),color('#F6635D')],
                [color('#F66CD1')],
                color('#F66CD1')
            ],
            hasCurve: false,
            angle: PI / 6
        },{ //number 14
            x: 375,
            y: 410,
            fillStyles: ['layered', '606257', 'dots'],
            bgColors: [color('#EF090B'), color('#FE63AD'), color('#FDCB49')],
            patternColors: [
                [color('#DBC958'), color('#020202'), color('#2DA24E'),color('#F6635D')],
                [color('#FD5E38'), color('#FE63AD')],
                color('#0E3280')
            ],
            hasCurve: false,
            angle: PI / 3
        },{ //number 15
            x: 525,
            y: 370,
            fillStyles: ['none', 'layered', 'zigzag'],
            bgColors: [color('#000000'), color('#000000'), color('#FCC121')],
            patternColors: [color('#000000'),
                [color('#1C8543'),color('#DB58B2'),color('#E66A31')],
                color('#E21F01')],
            hasCurve: false,
            angle: PI / 3
        },{ //number 16
            x: 330,
            y: 550,
            fillStyles: ['none', 'dots', 'dots'],
            bgColors: [color('#000000'), color('#F9B8F5'), color('#FEFCFC')],
            patternColors: [color('#000000'), color('#53BF6C'), color('#F52121')],
            hasCurve: false,
            angle: PI / 3
        },{ //number 17
            x: 480,
            y: 530,
            fillStyles: ['layered', 'none', 'dots'],
            bgColors: [color('#60C77A'), color('#EF84DC'), color('#F3FFF8')],
            patternColors: [[color('#041419'), color('#E35D47')],
                color('#000000'),
                color('#60C77A')],
            hasCurve: false,
            angle: PI / 3
        }
    ];

    for (let config of ringConfigs) {
        rings.push(new RingPattern(config));
    }


    for (let config of ringConfigs) {
        rings.push(new RingPattern(config));
    }
}


function draw() {
    background(1, 89, 125);
    for (let r of rings) {
        r.display();
    }
}

class RingPattern {
    constructor(config) {
        this.x = config.x;
        this.y = config.y;

        this.r0 = 6;
        this.r1 = 20;
        this.r2 = 35;
        this.r3 = 70;

        this.fillStyles = config.fillStyles; // [center, inner, outer]
        this.bgColors = config.bgColors;
        this.patternColors = config.patternColors;

        this.hasCurve = config.hasCurve ?? false;
        this.angle = config.angle ?? 0;
    }

    display() {
        // 边框圆
        noStroke();
        noFill();
        ellipse(this.x, this.y, this.r1 * 2);
        ellipse(this.x, this.y, this.r2 * 2);
        ellipse(this.x, this.y, this.r3 * 2);

        // 每个区域：中心，内圈，中圈
        this.drawRegion(this.r0, this.r1, this.fillStyles[0], this.bgColors[0], this.patternColors[0]);
        this.drawRegion(this.r1, this.r2, this.fillStyles[1], this.bgColors[1], this.patternColors[1]);
        this.drawRegion(this.r2, this.r3, this.fillStyles[2], this.bgColors[2], this.patternColors[2]);

        // 弧线
        this.drawPinkCurve();
        // 中心白圆（覆盖最中心区域）
        noStroke();
        fill(230);
        ellipse(this.x, this.y, this.r0 * 2);  // 用 r0 控制大小

    }

    drawRegion(innerR, outerR, style, bgColor, patternColor) {
        noStroke();
        // stroke(this.bgColors[0]);
        fill(bgColor);
        this.drawDonut(innerR, outerR);

        if (style === 'zigzag') {
            this.drawZigzagRing(innerR, outerR, 72, patternColor);
        } else if (style === 'dots') {
            this.drawDotsRing(innerR, outerR, 6, patternColor);
        } else if (style === 'layered') {
            this.drawLayeredRings(innerR, outerR, patternColor);
        }

    }

    drawDonut(innerR, outerR) {
        beginShape();
        for (let a = 0; a < TWO_PI; a += 0.05) {
            vertex(this.x + outerR * cos(a), this.y + outerR * sin(a));
        }
        beginContour();
        for (let a = TWO_PI; a > 0; a -= 0.05) {
            vertex(this.x + innerR * cos(a), this.y + innerR * sin(a));
        }
        endContour();
        endShape(CLOSE);
    }

    drawZigzagRing(innerR, outerR, steps, ringColor) {
        let offset = 5; // 安全内缩

        stroke(ringColor);
        strokeWeight(1.5);
        noFill();
        beginShape();
        for (let i = 0; i <= steps; i++) {
            let angle = TWO_PI * i / steps;
            let r = (i % 2 === 0) ? outerR - offset : innerR + offset;
            let x = this.x + r * cos(angle);
            let y = this.y + r * sin(angle);
            vertex(x, y);
        }
        endShape(CLOSE);
    }


    drawLayeredRings(innerR, outerR, baseColors) {
        let ringCount = 14;

        // 保证每种颜色至少出现一次，随机填满至6个
        let colorPool = [...baseColors];  // 三个颜色
        while (colorPool.length < ringCount) {
            colorPool.push(random(baseColors));
        }

        // 打乱顺序
        shuffle(colorPool, true);

        // 绘制
        noFill();
        strokeWeight(3);
        for (let i = 0; i < ringCount; i++) {
            let t = i / (ringCount - 1);
            let r = lerp(innerR, outerR, t);
            stroke(colorPool[i]);
            ellipse(this.x, this.y, r * 2);
        }
    }



    drawDotsRing(rMin, rMax, ringCount, dotColor) {
        fill(dotColor);
        noStroke();
        let margin = 3;

        for (let i = 0; i < ringCount; i++) {
            let r = lerp(rMin + margin, rMax - margin, i / (ringCount - 1));

            // 动态计算点数密度：大圈更多点
            let baseCount = floor(r * 1);
            let count = baseCount + floor(random(-4, 4));

            for (let j = 0; j < count; j++) {
                let angle = TWO_PI * j / count + random(-0.05, 0.05);
                let radiusOffset = random(-1.2, 1.2);
                let effectiveR = r + radiusOffset;
                let x = this.x + effectiveR * cos(angle);
                let y = this.y + effectiveR * sin(angle);

                // ⬇️ 动态点大小（根据 effectiveR 比例线性变化）
                let sizeFactor = map(effectiveR, rMin, rMax, rMin * 0.03, rMax * 0.018); // 你可调范围
                let w = random(4, 6) * sizeFactor;
                let h = random(3, 5) * sizeFactor;

                let a = angle + random(-0.3, 0.3);

                push();
                translate(x, y);
                rotate(a);
                ellipse(0, 0, w, h);
                pop();
            }
        }
    }





    drawPinkCurve() {
        if (!this.hasCurve) return;

        push();
        translate(this.x, this.y);
        rotate(this.angle);
        stroke('#F35074');
        strokeWeight(4);
        noFill();
        let s = 0.5;
        bezier(
            0, 0,
            65 * s, -18 * s,
            193 * s, -10 * s,
            213 * s, 77 * s
        );
        pop();
    }
}
