const NonLangStore = require("./NonLangStore")
// @ponicode
describe("getConfig", () => {
    let inst

    beforeEach(() => {
        inst = new NonLangStore.NonLangStore()
    })

    test("0", () => {
        let callFunction = () => {
            inst.getConfig()
        }
    
        expect(callFunction).not.toThrow()
    })
})
