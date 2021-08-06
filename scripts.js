const data = {
  "columns":[{"code":"Острів","name":"Острів","viewState":0,"isFileContent":false,"isFileName":false,"isPrintable":true,"hint":"","dataType":"Text"},{"code":"Локація","name":"Локація","viewState":0,"isFileContent":false,"isFileName":false,"isPrintable":true,"hint":"","dataType":"Text"},{"code":"Текст","name":"Текст","viewState":0,"isFileContent":false,"isFileName":false,"isPrintable":true,"hint":"","dataType":"Text"},{"code":"Дата","name":"Дата","viewState":0,"isFileContent":false,"isFileName":false,"isPrintable":true,"hint":"","dataType":"DateTime"},{"code":"Коментар","name":"Коментар","viewState":0,"isFileContent":false,"isFileName":false,"isPrintable":true,"hint":"","dataType":"Text"}],
  "rows":[{"values":["Труханов","Київ"," столиця та найбільше місто України, одне з найбільших і найстаріших міст Європи. Розташований у середній течії Дніпра, у північній Наддніпрянщині. Політичний, соціально-економічний, транспортний та освітньо-науковий центр країни. Окрема адміністративно-територіальна одиниця в складі України й адміністративний центр Київської області. Адміністративно до складу Київської області не входить. Місце розташування центральних органів влади України, іноземних місій, штаб-квартир більшості підприємств і громадських об'єднань, що працюють в Україні.","2020-12-12T00:00:00","Тестове"]}]
};

const container = document.querySelector('.container');

data.columns.map((item, index) => {
  const getDay = (date) => {
    return date < 10 ? `0${date.getDate()}` : date.getDate();
  };

  const formatDate = (date) => {
    const currentDate = new Date(date);

    return [getDay(currentDate),
      currentDate.getMonth() + 1,
      currentDate.getFullYear()].join('/');
  };

  const header = item.name;
  const info = data.rows[0].values[index];
  const dataBlock = document.createElement('div');
  let currentInfo = item.dataType === 'DateTime' ? formatDate(info) : info;

  dataBlock.className = 'container__block';

  dataBlock.innerHTML = `
  <div class="header-block">
    <h2>${header}</h2>
  </div>

  <div class="info-block">
    <p>${currentInfo}</p>
  </div>`

  container.append(dataBlock);
});
