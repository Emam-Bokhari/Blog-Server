"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryBuilder = void 0;
class QueryBuilder {
    constructor(modelQuery, query) {
        this.modelQuery = modelQuery;
        this.query = query;
    }
    search(searchableFields) {
        var _a;
        if ((_a = this === null || this === void 0 ? void 0 : this.query) === null || _a === void 0 ? void 0 : _a.search) {
            this.modelQuery = this.modelQuery.find({
                $or: searchableFields.map((field) => {
                    var _a;
                    return {
                        [field]: { $regex: (_a = this === null || this === void 0 ? void 0 : this.query) === null || _a === void 0 ? void 0 : _a.search, $options: 'i' },
                    };
                }),
            });
        }
        return this;
    }
    filter() {
        const queryObj = Object.assign({}, this.query);
        // console.log(queryObj)
        const excludeFields = ['search', 'sortBy', 'sortOrder'];
        excludeFields === null || excludeFields === void 0 ? void 0 : excludeFields.forEach((el) => delete queryObj[el]);
        if (queryObj === null || queryObj === void 0 ? void 0 : queryObj.filter) {
            this.modelQuery = this.modelQuery.find({ author: queryObj.filter });
            delete queryObj.filter;
        }
        this.modelQuery = this.modelQuery.find(queryObj);
        return this;
    }
    sortBy() {
        var _a, _b, _c, _d;
        const sortBy = ((_c = (_b = (_a = this === null || this === void 0 ? void 0 : this.query) === null || _a === void 0 ? void 0 : _a.sortBy) === null || _b === void 0 ? void 0 : _b.split(',')) === null || _c === void 0 ? void 0 : _c.join(' ')) || '-createdAt';
        const sortOrder = ((_d = this.query) === null || _d === void 0 ? void 0 : _d.sortOrder) === 'desc' ? '-' : '';
        this.modelQuery = this.modelQuery.sort(`${sortOrder}${sortBy}`);
        return this;
    }
}
exports.QueryBuilder = QueryBuilder;
