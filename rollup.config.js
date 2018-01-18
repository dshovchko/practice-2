import buble from "rollup-plugin-buble";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import json from "rollup-plugin-json";
import multiEntry from "rollup-plugin-multi-entry";

export default {
    plugins: [
        json(),
        buble({ objectAssign: "Object.assign" }),
        resolve({ preferBuiltins: true }),
        commonjs(),
        multiEntry()
    ],
    output: {

        format: "umd",
        name: "practice3",
        sourcemap: true
    }
};
