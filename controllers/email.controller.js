const { string } = require('yup');
const sendMail = require("../utils/mail");
const convertTime = require("../utils/convertTime");
const { Email } = require("../models/index");

module.exports = {
    email_form: (req, res) => {
        const message = req.flash('message')[0];

        return res.render('email/form', {
            message,
            req,
        });
    },

    handle_send_email: async (req, res, next) => {
        const body = await req.validate(req.body, {
            to: string().required('Need type!').email('Wrong format email!'),
            title: string().required('Need type!'),
            content: string().required('Need type!')
        });

        if (body) {
            const { to, title, content } = body;
            const root_url = `${ req.protocol }://${ req.get('host') }`;
            const id = await Email.max('id');
            let info;
            
            if (id) info = await sendMail(to, title, content, root_url, id + 1);
            else info = await sendMail(to, title, content, root_url, 1);

            if (info.accepted.length > 0) {
                req.flash('message', 'Gửi email thành công!');
                await Email.create({
                    to,
                    title,
                    content
                });
            }
            else req.flash('message', 'Gửi email thất bại!');
        }

        return res.redirect('/email_form');
    },

    handle_load_image: async (req, res) => {
        const id = req.params.id;

        try {
            await Email.update(
                {
                    status: true,
                },
                {
                    where: {
                        id,
                    }
                }
            );
        }
        catch(e) {
            return next(e);
        }
        return res.sendFile('images/tracker_img.jpg', { root: 'public' });
    },

    email_history: async (req, res, next) => {
        try {
            const get_emails = await Email.findAll({
                order: [[ 'id', 'desc' ]]
            });
            const emails = get_emails.map((email) => {
                const obj = email.dataValues;

                return {
                    ...obj,
                    created_at: convertTime(obj.created_at),
                    updated_at: convertTime(obj.updated_at)
                }
            })

            return res.render('email/history', {
                emails,
            });
        }
        catch(e) {
            return next(e);
        }
    },

    email_detail: async (req, res, next) => {
        const id = req.params.id;

        try {
            let email = await Email.findOne({
                where: {
                    id,
                }
            });

            if (email) {
                email.dataValues = {
                    ...email.dataValues,
                    created_at: convertTime(email.dataValues.created_at),
                    updated_at: convertTime(email.dataValues.updated_at)
                }
            }

            return res.render('email/detail', {
                email
            });
        }
        catch(e) {
            return next(e);
        }
    }
}