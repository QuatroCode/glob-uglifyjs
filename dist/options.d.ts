/// <reference types="uglify-js" />
import * as uglifyjs from "uglify-js";
export interface OptionsDto {
    [key: string]: any;
    UseMinExt?: boolean;
    MinifyOptions?: uglifyjs.MinifyOptions;
    OutDir?: string;
    Cwd?: string;
    RootDir?: string;
    RemoveSource?: boolean;
    Debug?: boolean;
    exclude?: Array<string> | string;
}
export declare class Options implements OptionsDto {
    constructor(importData?: OptionsDto);
    private options;
    readonly UseMinExt: boolean;
    readonly MinifyOptions: uglifyjs.MinifyOptions;
    readonly OutDir: string;
    readonly Cwd: string;
    readonly RootDir: string;
    readonly RemoveSource: boolean;
    readonly Debug: boolean;
    readonly Exclude: Array<string> | string | undefined;
}
