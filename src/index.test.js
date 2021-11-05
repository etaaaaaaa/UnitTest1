import { exportAllDeclaration } from "@babel/types"
import getHealth from "./index"

test("Test Wizard's health", () => {
    const result = getHealth({
        name: 'Wizard',
        health: 100
    })
    expect(result).toBe('healthy')
})

test("Test Wizard's health", () => {
    const result = getHealth({
        name: 'Wizard',
        health: 55
    })
    expect(result).toBe('healthy')
})

test("Test Wizard's health", () => {
    const result = getHealth({
        name: 'Wizard',
        health: 43
    })
    expect(result).toBe('wounded')
})

test("Test Wizard's health", () => {
    const result = getHealth({
        name: 'Wizard',
        health: 15
    })
    expect(result).toBe('wounded')
})

test("Test Wizard's health", () => {
    const result = getHealth({
        name: 'Wizard',
        health: 14
    })
    expect(result).toBe('critical')
})

test("Test Wizard's health", () => {
    const result = getHealth({
        name: 'Wizard',
        health: 1
    })
    expect(result).toBe('critical')
})