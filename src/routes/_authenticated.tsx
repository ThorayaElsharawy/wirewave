import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated')({
    beforeLoad: ({ context }) => {
        const { isLogged } = context.authentication
        if (!isLogged()) {
            console.log('not loggeg in')
            throw redirect({
                to: '/',
            })
        }
    }
})
