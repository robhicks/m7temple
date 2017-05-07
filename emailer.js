const helper = require('sendgrid').mail;
const sg = require('sendgrid')(process.env.SENGRID_API_KEY);

module.exports = function(data) {
  console.log("data", data)
  let from = new helper.Email('rob@hixfamily.org');
  let to = new helper.Email(data.user.email);
  let subject = 'You have received a Temple & Family History Gift!';
  let content = new helper.Content('text/plain', 'Congratulations! You have received a temple and family history gift for ' + data.gift.title + '.');
  let mail = new helper.Mail(from, subject, to, content);

  let request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON(),
  });

  sg.API(request, (error, response) => {
    console.log(response.statusCode);
    console.log(response.body);
    console.log(response.headers);
  });
};
