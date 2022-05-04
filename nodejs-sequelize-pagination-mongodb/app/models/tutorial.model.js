const { mongoose } = require(".");

module.exports = (mongoose, mongoosePaginate) => {
    var schema = mongoose.Schema(
        {
        title: String,
        description: String,
        published: Boolean,
        },
        { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, __id, ...object } = this.toObject();
        object.id = __id;
        return object;
    });

    schema.plugin(mongoosePaginate);

    const Tutorial = mongoose.model("tutorial", schema);
    return Tutorial;
};

