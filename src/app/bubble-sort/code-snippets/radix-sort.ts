export const radixSortPython = `
def radix_sort(arr):
    max_val = max(arr)
    exp = 1
    while max_val // exp > 0:
        count_sort(arr, exp)
        exp *= 10
    return arr

def count_sort(arr, exp):
    n = len(arr)
    output = [0] * n
    count = [0] * 10

    for i in range(n):
        index = arr[i] // exp
        count[index % 10] += 1

    for i in range(1, 10):
        count[i] += count[i - 1]

    i = n - 1
    while i >= 0:
        index = arr[i] // exp
        output[count[index % 10] - 1] = arr[i]
        count[index % 10] -= 1
        i -= 1

    for i in range(n):
        arr[i] = output[i]
`;
export const radixSortJava = `
public static void radixSort(int[] arr) {
    int maxVal = Arrays.stream(arr).max().getAsInt();
    int exp = 1;
    while (maxVal / exp > 0) {
        countSort(arr, exp);
        exp *= 10;
    }
}
public static void countSort(int[] arr, int exp) {
    int n = arr.length;
    int[] output = new int[n];
    int[] count = new int[10];
    for (int i = 0; i < n; i++) {
        int index = arr[i] / exp;
        count[index % 10]++;
    }
    for (int i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }
    for (int i = n - 1; i >= 0; i--) {
        int index = arr[i] / exp;
        output[count[index % 10] - 1] = arr[i];
        count[index % 10]--;
    }
    for (int i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}
`;
export const radixSortC = `
void radixSort(int arr[], int n) {
    int maxVal = INT_MIN;
    for (int i = 0; i < n; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }
    int exp = 1;
    while (maxVal / exp > 0) {
        countSort(arr, n, exp);
        exp *= 10;
    }
}
void countSort(int arr[], int n, int exp) {
    int output[n];
    int count[10];
    for (int i = 0; i < n; i++) {
        int index = arr[i] / exp;
        count[index % 10]++;
    }
    for (int i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }
    for (int i = n - 1; i >= 0; i--) {
        int index = arr[i] / exp;
        output[count[index % 10] - 1] = arr[i];
        count[index % 10]--;
    }
    for (int i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}
`;
export const radixSortCPP = `
void radixSort(int arr[], int n) {
    int maxVal = INT_MIN;
    for (int i = 0; i < n; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }
    int exp = 1;
    while (maxVal / exp > 0) {
        countSort(arr, n, exp);
        exp *= 10;
    }
}
void countSort(int arr[], int n, int exp) {
    int output[n];
    int count[10];
    for (int i = 0; i < n; i++) {
        int index = arr[i] / exp;
        count[index % 10]++;
    }
    for (int i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }
    for (int i = n - 1; i >= 0; i--) {
        int index = arr[i] / exp;
        output[count[index % 10] - 1] = arr[i];
        count[index % 10]--;
    }
    for (int i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}
`;
export const radixSortCSharp = `
public static void RadixSort(int[] arr) {
    int maxVal = arr.Max();
    int exp = 1;
    while (maxVal / exp > 0) {
        CountSort(arr, exp);
        exp *= 10;
    }
}
public static void CountSort(int[] arr, int exp) {
    int n = arr.Length;
    int[] output = new int[n];
    int[] count = new int[10];
    for (int i = 0; i < n; i++) {
        int index = arr[i] / exp;
        count[index % 10]++;
    }
    for (int i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }
    for (int i = n - 1; i >= 0; i--) {
        int index = arr[i] / exp;
        output[count[index % 10] - 1] = arr[i];
        count[index % 10]--;
    }
    for (int i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}
`;
export const radixSortTypeScript = `
export function radixSort(arr: number[]): number[] {
    let maxVal = Math.max(...arr);
    let exp = 1;
    while (maxVal / exp > 0) {
        countSort(arr, exp);
        exp *= 10;
    }
    return arr;
}
function countSort(arr: number[], exp: number): void {
    const n = arr.length;
    const output = Array(n);
    const count = Array(10).fill(0);
    for (let i = 0; i < n; i++) {
        const index = Math.floor(arr[i] / exp);
        count[index % 10]++;
    }
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }
    for (let i = n - 1; i >= 0; i--) {
        const index = Math.floor(arr[i] / exp);
        output[count[index % 10] - 1] = arr[i];
        count[index % 10]--;
    }
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}
`;
export const radixJavaSript = `
function radixSort(arr) {
    let maxVal = Math.max(...arr);
    let exp = 1;
    while (maxVal / exp > 0) {
        countSort(arr, exp);
        exp *= 10;
    }
    return arr;
}
function countSort(arr, exp) {
    const n = arr.length;
    const output = Array(n);
    const count = Array(10).fill(0);
    for (let i = 0; i < n; i++) {
        const index = Math.floor(arr[i] / exp);
        count[index % 10]++;
    }
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }
    for (let i = n - 1; i >= 0; i--) {
        const index = Math.floor(arr[i] / exp);
        output[count[index % 10] - 1] = arr[i];
        count[index % 10]--;
    }
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}
`;

