export const axios = {
    get<T>(url: string): Promise<T> {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()
            xhr.open('get', url)
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    setTimeout(() => {
                        resolve(JSON.parse(xhr.responseText))
                    }, 2000);
                }
            }
            xhr.send(null)
        })
    }
}