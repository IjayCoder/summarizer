"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, FileText, Sparkles } from "lucide-react"

export default function Component() {
  const [inputText, setInputText] = useState("")
  const [summaryLength, setSummaryLength] = useState("100")
  const [isLoading, setIsLoading] = useState(false)
  const [summary, setSummary] = useState("")

  const handleSummarize = async () => {
    if (!inputText.trim()) return

    setIsLoading(true)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Mock summary generation
    const mockSummary = `This is a ${summaryLength}-word summary of your text. The main points have been extracted and condensed while preserving the key information and context. The summarization process has identified the most important concepts and presented them in a clear, concise manner.`

    setSummary(mockSummary)
    setIsLoading(false)
  }

  const characterCount = inputText.length
  const wordCount = inputText.trim() ? inputText.trim().split(/\s+/).length : 0

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Text Summarizer</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform lengthy text into concise, meaningful summaries with our intelligent text summarization tool.
          </p>
        </div>

        {/* Input Section */}
        <Card className="shadow-lg border-0 bg-gray-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Input Text
            </CardTitle>
            <CardDescription>Paste or type the text you want to summarize below</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Textarea
                placeholder="Enter your text here... The more detailed your input, the better the summary will be."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="min-h-[200px] resize-none border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>{characterCount} characters</span>
                <span>{wordCount} words</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-end">
              <div className="space-y-2 flex-1">
                <Label htmlFor="summary-length">Summary Length</Label>
                <Select value={summaryLength} onValueChange={setSummaryLength}>
                  <SelectTrigger id="summary-length" className="w-full sm:w-[200px]">
                    <SelectValue placeholder="Select length" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="50">50 words</SelectItem>
                    <SelectItem value="100">100 words</SelectItem>
                    <SelectItem value="150">150 words</SelectItem>
                    <SelectItem value="200">200 words</SelectItem>
                    <SelectItem value="300">300 words</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={handleSummarize}
                disabled={!inputText.trim() || isLoading}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 h-10"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Summarizing...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Summarize
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Result Section */}
        {(isLoading || summary) && (
          <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-blue-600" />
                Summary Result
              </CardTitle>
              <CardDescription>
                {isLoading ? "Generating your summary..." : `Summary in approximately ${summaryLength} words`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="text-center space-y-4">
                    <Loader2 className="h-8 w-8 animate-spin text-blue-600 mx-auto" />
                    <p className="text-gray-600 font-medium">Analyzing and summarizing your text...</p>
                    <p className="text-sm text-gray-500">This may take a few moments</p>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-lg p-6 border border-blue-100">
                  <p className="text-gray-800 leading-relaxed text-base">{summary}</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Footer */}
        <div className="text-center text-sm text-gray-500">
          <p>Powered by advanced AI text summarization technology</p>
        </div>
      </div>
    </div>
  )
}
