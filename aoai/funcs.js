function getCurrentDatetime() {
  const now = new Date();
  
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // 月は0から始まるため +1
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];
  const dayOfWeek = daysOfWeek[now.getDay()];

  return `${year}/${month}/${day} ${hours}:${minutes}:${seconds} (${dayOfWeek})`;
}

// 使用例
// console.log(getCurrentDatetime());

async function callApi(url) {
  try {
      const response = await fetch(url);

      // ステータスが 200 でない場合にエラー処理
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }

      // レスポンスを JSON としてパース
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // エラーを再スロー
  }
}

async function getGitHubUserinfo(userName) {
  const url = `https://api.github.com/users/${userName}`;

  try {
      const userInfo = await callApi(url);
      return userInfo; // ユーザー情報を返す
  } catch (error) {
      console.error('Error getting GitHub user info:', error);
      throw error; // エラーを再スロー
  }
}

// //使用例
// getGitHubUserinfo('octocat')
//     .then(userInfo => console.log(userInfo))
//     .catch(error => console.error('Error fetching GitHub user info:', error));

module.exports = {getCurrentDatetime,getGitHubUserinfo};
