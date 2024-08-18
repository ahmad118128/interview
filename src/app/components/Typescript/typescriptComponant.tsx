interface ITypescriptComponentProp {
  name: string;
  userName: string;
  passWord: number;
  isAdmin: boolean;
}

export function TypeScriptComponent({
  isAdmin,
  name,
  passWord,
  userName,
}: ITypescriptComponentProp) {
  return (
    <main>
      <h1>The userName</h1>
      {isAdmin && <p>Admin Of site</p>}
      <p>{name}</p>
      <p>{userName}</p>
      <p>{passWord}</p>
    </main>
  );
}
