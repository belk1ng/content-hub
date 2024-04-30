declare namespace NodeJS {
    interface ProcessEnv {
        PORT?: string;
        NODE_ENV: "development" | "production";
    }
}


declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

