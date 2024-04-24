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
        <p className="repo__text1">date created :</p>
        <p className="repo__text2">{repository.created_at}</p>
      </div>
      <div className="repo__details">
        <p className="repo__text1">main language :</p>
        <p className="repo__text2">{repository.language}</p>
      </div>
      <div className="repo__details">
        <p className="repo__text1">visibility :</p>
        <p className="repo__text2">{repository.visibility}</p>
      </div>
      <div className="repo__details">
        <p className="repo__text1">open issues :</p>
        <p className="repo__text2">{repository.open_issues}</p>
      </div>
      <div className="repo__details">
        <p className="repo__text1">file size :</p>
        <p className="repo__text2">{repository.size + "kb"}</p>
      </div>
      <a href={repository.svn_url}>
        <button className="repo__button">view repo on github</button>
      </a>
    </div>
  );
}

export default Eachrepo;
