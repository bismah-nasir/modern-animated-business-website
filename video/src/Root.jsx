import { Composition, Still } from "remotion";
import { GlassbloomPromo } from "./GlassbloomPromo.jsx";
import { GlassbloomPoster } from "./poster/Poster.jsx";
import { DURATION_FRAMES, FPS } from "./timing.js";

export const RemotionRoot = () => (
    <>
        <Composition
            id="GlassbloomPromo"
            component={GlassbloomPromo}
            durationInFrames={DURATION_FRAMES}
            fps={FPS}
            width={1920}
            height={1080}
        />
        <Still id="GlassbloomPoster" component={GlassbloomPoster} width={1920} height={1080} />
    </>
);
