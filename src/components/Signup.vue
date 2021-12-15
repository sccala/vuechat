<template>
    <div class="max-w-2xl mx-auto">
        <div
            class="bg-gray-100 shadow-md rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-tertiary"
        >
            <form class="space-y-6" action="#">
                <h3 class="text-xl font-medium text-primary">
                    Login in to start chatting
                </h3>
                <div>
                    <label
                        for="email"
                        class="text-sm font-medium text-primary block mb-2"
                        >Your email</label
                    >
                    <input
                        type="email"
                        name="email"
                        id="email"
                        class="bg-gray-50 border border-gray-300 text-primary sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-secondary dark:border-gray-500 dark:placeholder-gray-400"
                        placeholder="name@company.com"
                        required=""
                    />
                </div>
                <div>
                    <label
                        for="password"
                        class="text-sm font-medium text-primary block mb-2"
                        >Your password</label
                    >
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        class="bg-gray-50 border border-gray-300 text-primary sm:text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5 dark:bg-secondary dark:border-gray-500 dark:placeholder-gray-400"
                        required=""
                    />
                </div>
                <div class="flex items-start">
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                            <input
                                id="remember"
                                aria-describedby="remember"
                                type="checkbox"
                                class="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-green-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-600 dark:ring-offset-gray-800"
                                required=""
                            />
                        </div>
                        <div class="text-sm ml-3">
                            <label
                                for="remember"
                                class="font-medium text-primary"
                                >Remember me</label
                            >
                        </div>
                    </div>
                    <a
                        href="#"
                        class="text-sm text-accent hover:underline ml-auto"
                        >Lost Password?</a
                    >
                </div>
                <button
                    type="submit"
                    class="w-full text-gray-100 bg-accent hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-green-700"
                >
                    Login to your account
                </button>
                <div class="text-sm font-medium text-secondary">
                    Not registered?
                    <a href="#" class="text-accent hover:underline"
                        >Create account</a
                    >
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Signup',
}
</script>
