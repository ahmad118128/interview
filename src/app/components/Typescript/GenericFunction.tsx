interface genericFunctionType<T> {
  name: string;
  userName: string;
  password: T;
}

export function genricFunction<T>(
  props: genericFunctionType<T>
): genericFunctionType<T> {
  return props;
}
