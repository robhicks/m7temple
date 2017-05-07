const helper = require('sendgrid').mail;
const sg = require('sendgrid')(process.env.SENGRID_API_KEY);

module.exports = function(data) {
  let from = new helper.Email('rob@hixfamily.org');
  let to = new helper.Email('rob@hixfamily.org');
  let subject = 'Congratulations - You have received a Temple & Family History Gift';
  let content = new helper.Content('text/plain', 'You did it!');
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
