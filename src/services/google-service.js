export async function getAutoCompleteCities(apiKey, input) {
    const response = await fetch(
        'https://places.googleapis.com/v1/places:autocomplete',
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Goog-Api-Key": apiKey,
            },
            body: JSON.stringify({
                input: input,
                includedPrimaryTypes: ["(cities)"] // restrict to cities
            })
        }
    );

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Autocomplete API error: ${errorText}`);
    }

    return response.json();
}