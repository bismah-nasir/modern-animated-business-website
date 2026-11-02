import { AbsoluteFill, Audio, Sequence, interpolate, staticFile, useCurrentFrame } from "remotion";
import { Background } from "./components/Background.jsx";
import { Intro } from "./scenes/Intro.jsx";
import { Hero } from "./scenes/Hero.jsx";
import { Services } from "./scenes/Services.jsx";
import { Stats } from "./scenes/Stats.jsx";
import { Portfolio } from "./scenes/Portfolio.jsx";
import { TechStack } from "./scenes/TechStack.jsx";
import { Testimonial } from "./scenes/Testimonial.jsx";
import { Outro } from "./scenes/Outro.jsx";
import { fontFamily } from "./theme.js";
import { DURATION_FRAMES, sceneFrom, sceneLength } from "./timing.js";

const scenes = [
    ["intro", Intro],
    ["hero", Hero],
    ["services", Services],
    ["stats", Stats],
    ["portfolio", Portfolio],
    ["techStack", TechStack],
    ["testimonial", Testimonial],
];

const FadeToBlack = () => {
    const frame = useCurrentFrame();
    const opacity = interpolate(frame, [DURATION_FRAMES - 30, DURATION_FRAMES - 1], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });
    return <AbsoluteFill style={{ background: "#000", opacity }} />;
};

export const GlassbloomPromo = () => (
    <AbsoluteFill style={{ fontFamily }}>
        <Background />
        {scenes.map(([name, Component]) => (
            <Sequence key={name} name={name} from={sceneFrom(name)} durationInFrames={sceneLength(name)}>
                <Component />
            </Sequence>
        ))}
        {/* Outro runs to the end, including the music's tail */}
        <Sequence name="outro" from={sceneFrom("outro")}>
            <Outro length={DURATION_FRAMES - sceneFrom("outro")} />
        </Sequence>
        <FadeToBlack />
        <Audio src={staticFile("music.wav")} />
    </AbsoluteFill>
);
