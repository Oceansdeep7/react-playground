import { Allotment } from "allotment";
import 'allotment/dist/style.css';
import Header from "@/components/Header";
import CodeEditor from "@/components/CodeEditor";
import Preview from "@/components/Preview";
import { useContext } from "react";
import { PlaygroundContext } from "./PlaygroundContext";

export default function ReactPlayground() {

    const {
        theme,
        setTheme,
    } = useContext(PlaygroundContext)

    return <main
        className={theme}
    >
        <Header/>
        <Allotment defaultSizes={[100, 100]}>
            <Allotment.Pane minSize={0}>
                <CodeEditor />
            </Allotment.Pane>
            <Allotment.Pane minSize={0}>
                <Preview />
            </Allotment.Pane>
        </Allotment>
    </main>
}