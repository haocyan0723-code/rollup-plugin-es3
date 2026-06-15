export interface Es3Options {
  remove?: Array<'defineProperty' | 'freeze' | string>;
  sourceMap?: boolean;
  sourcemap?: boolean;
}

export default function es3(options?: Es3Options): {
  name: 'es3';
  transformBundle(code: string): {
    code: string;
    map: unknown;
  };
};
