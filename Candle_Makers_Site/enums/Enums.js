const ScentType = Object.freeze({
    Unscented: Symbol("Unscented"),
    WoodlandRose: Symbol("Woodland Rose"),
    ToastedVanilla: Symbol("Toasted Vanilla"),
    OceanBreeze: Symbol("Ocean Breeze"),
    WildBerry: Symbol("Wild Berry"),
});

const ColorType = Object.freeze({
    SolidColor: "solid_color",
    MultiColor: "multi_color",
});

const ShapeType = Object.freeze({
    Carved: "Carved",
    Pillar: "Pillar",
    Triangle: "Triangle",
    KnottedLoop: "Knotted Loop",
    RoseFlower: "Rose Flower",
});

const SurfaceDesign = Object.freeze({
    Smooth: "Smooth",
    Grooved: "Grooved",
    ZigzagGrooved: "Zig-Zag Grooved",
    CarvedSwan: "Swan-Carved",
    CarvedButterfly: "Butterfly-Carved",
});

export { ColorType, ShapeType, SurfaceDesign, ScentType };
