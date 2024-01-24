const { object } = require("yup");

module.exports = (req, res, next) => {
    // Định nghĩa hàm validate để sử dụng bên controller
    req.validate = async (data, rules = {}) => {
        const schema = object(rules);
        
        try {
            const body = await schema.validate(data, {
                abortEarly: false,
            });
            return body;
        }
        catch (e) {
            const errors = {}
            e.inner.forEach((obj) => {
                errors[obj.path] = obj.errors[0];
            })

            req.flash('errors', errors);
            req.flash('old_data', data);
        }
    };

    // Lưu các lỗi nếu validate faile vào req để thuận tiện hiển thị ở view
    const errors = req.flash('errors');
    req.errors = errors.length > 0 ? errors[0] : {};

    const old_data = req.flash('old_data');
    req.old_data = errors.length > 0 ? old_data[0] : {};

    next();
}