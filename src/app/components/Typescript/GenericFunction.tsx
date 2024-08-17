interface genericFunctionType<T> {
  name: string;
  userName: string;
  password: number;
}

function genricFunction<T>(
  props: genericFunctionType<T>
): genericFunctionType<T> {
  return props;
}
