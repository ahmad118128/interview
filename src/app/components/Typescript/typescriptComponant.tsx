interface ITypescriptComponentProp {
  name: string;
  userName: string;
  passWord: number;
  isAdmin: boolean;
}

function typeScriptComponent(props: ITypescriptComponentProp) {
  const { isAdmin, name, passWord, userName } = props;

  return (
    <main>
      <h1>The userName</h1>
      {isAdmin && <p>Admin Of site</p>}
      <p>{name}</p>
      <p>[userName]</p>
      <p>{passWord}</p>
    </main>
  );
}
