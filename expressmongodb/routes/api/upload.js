var storage = multer.diskStorage({
    destination: './public/users',
    filename: function (req, file, cb) {
        switch (file.mimetype) {
            case 'image/jpeg':
                ext = '.jpeg';
                break;
            case 'image/png':
                ext = '.png';
                break;
        }
        cb(null, file.originalname + ext);
    }
});

var upload = multer({storage: storage});
exports.upload;