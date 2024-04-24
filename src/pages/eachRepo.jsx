function Eachrepo({ repository }) {
  return (
    <div className="repo">
      <h1 className="repo__head">{repository.name}</h1>
      <ol className="repo__menu">
        <li className="repo__list">
          <i className="fa-solid fa-code-fork"></i>
          <b>fork:</b>
          {repository.forks}
        </li>
        <li className="repo__list">
          <i className="fa-solid fa-star"></i>
          <b>stars:</b>
          {repository.stargazers_count}
        </li>
        <li className="repo__list">
          <i className="fa-solid fa-eye"></i>
          <b>watchers:</b>
          {repository.watchers}
        </li>
      </ol>
      <div className="repo__details">
        <p className="repo__text1">shoo</p>
        <p className="repo__text2">when</p>
      </div>
      <div className="repo__details">
        <p className="repo__text1">shoo</p>
        <p className="repo__text2">when</p>
      </div>
      <div className="repo__details">
        <p className="repo__text1">shoo</p>
        <p className="repo__text2">when</p>
      </div>
      <div className="repo__details">
        <p className="repo__text1">shoo</p>
        <p className="repo__text2">when</p>
      </div>
      <div className="repo__details">
        <p className="repo__text1">shoo</p>
        <p className="repo__text2">when</p>
      </div>
      <div className="repo__details">
        <p className="repo__text1">shoo</p>
        <p className="repo__text2">when</p>
      </div>
      <div className="repo__details">
        <p className="repo__text1">shoo</p>
        <p className="repo__text2">when</p>
      </div>
    </div>
  );
}

export default Eachrepo;
