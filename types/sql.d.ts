declare module 'sql.js' {
    export interface QueryExecResult {
        columns: string[];
        values: any[][];
    }

    export class Database {
        constructor(data?: Uint8Array);
        run(sql: string, params?: any): void;
        exec(sql: string): QueryExecResult[];
        prepare(sql: string): Statement;
        close(): void;
        export(): Uint8Array;
    }

    export class Statement {
        run(values?: any[] | object): void;
        step(): boolean;
        get(params?: any[] | object): any[];
        getAsObject(params?: any[] | object): object;
        free(): boolean;
    }

    export interface SqlJsStatic {
        Database: typeof Database;
    }

    export default function initSqlJs(config?: { locateFile?: (file: string) => string }): Promise<SqlJsStatic>;
}
