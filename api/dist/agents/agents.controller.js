"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const agents_service_1 = require("./agents.service");
const swagger_1 = require("@nestjs/swagger");
let AgentsController = class AgentsController {
    constructor(agentsService) {
        this.agentsService = agentsService;
    }
    getAllAgents() {
        return this.agentsService.findAll();
    }
    getAgent(id) {
        return this.agentsService.getAgent(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], AgentsController.prototype, "getAllAgents", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AgentsController.prototype, "getAgent", null);
AgentsController = __decorate([
    swagger_1.ApiUseTags('agents'),
    common_1.Controller('agents'),
    __metadata("design:paramtypes", [agents_service_1.AgentsService])
], AgentsController);
exports.AgentsController = AgentsController;
//# sourceMappingURL=agents.controller.js.map