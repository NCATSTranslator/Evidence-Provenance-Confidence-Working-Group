
## Abrar Original Proposal
{
  "edges": {
    "id": "e719492"
    "subject": "RXCUI:1544384",
    "predicate": "biolink:correlated_with",
    "object": "MONDO:0008383",
    "provenance": [
	{
      "id": "p0"
	  "original_knowledge_source": "infores:KS"
    },
    { 
	  "id": "p1"
	  "aggregator_knowledge_source": "infores:KP_1",
      "adjacency_list": [
	   {  
        "parent": "p0",
        "method": "consumed"
       }
	  ]
    },
    {  
      "id": "p2"
	  "aggregator_knowledge_source": "infores:KP_2",
      "adjacency_list": [
      {
       "parent": "p0",
       "method": "consumed"
      }
     ]
    },
    {
 	  "id": "p3"
      "aggregator_knowledge_source": "infores:KP_3",
      "adjacency_list": [
      {
        "parent": "p0",
        "method": "consumed"
      }
     ]
    },
   {
 	  "id": "p4"
      "aggregator_knowledge_source": "infores:ARA_1",
      "adjacency_list": [
      {
       "parent": "p1",
       "method": "query"
	  },
   	  {
       "parent": "p2",
       "method": "contains"
      }
     ]
    },
    {
      "id":"p5"
	  "aggregator_knowledge_source": "infores:ARA_2",
      "adjacency_list": [
        {
         "parent": "p1",
         "method": "query"
        },
        {
         "parent": "p3",
         "method": "query"
        }
       ]
     },
     {
        "id": "p6":
		"aggregator_knowledge_source": "infores:WR",
        "adjacency_list": [
        {
         "parent": "p4",
         "method": "query"
        },
        {
         "parent": "p5",
         "method": "query"
        }
       ]
     }
   }
   
   
 #----------------------------------------------------#
   
  ## Biolink-Based Renaming/Reframing of Abrar's Original Proposal (same structure, more Biolink-based semantics)
{
  "edges": {
    "id": "e719492"
    "subject": "RXCUI:1544384",
    "predicate": "biolink:correlated_with",
    "object": "MONDO:0008383",
    "sources": [
	{
      "id": "s24b72cca732kb",               # A SourceMetadata object
	  "resource": "infores:KS1",
	  "resource_type": "original"
    },
    { 
	  "id": "s8bc318ab77kp1",               # A SourceMetadata object
	  "resource": "infores:KP_1",
	  "resource_role": "aggregator",
      "retrievals": [
	   {  
        "retreived_from": "infores:KS1",    # A RetrievalMetadata object
        "method": "consumed"
       }
	  ]
    },
    {  
      "id": "s3b57ca75b3kp2",               # A SourceMetadata object
	  "resource": "infores:KP_2",
	  "resource_role": "aggregator",
      "retrievals": [
      {
       "retrieved_from": "infores:KS1",     # A RetrievalMetadata object 
       "method": "consumed"
      }
     ]
    },
    {
 	  "id": "s93bb579a87kp3",               # A SourceMetadata object
      "resource": "infores:KP_3",
	  "resource_role": "aggregator",
      "retrievals": [
      {
        "retrieved_from": "infores:KS1",    # A RetrievalMetadata object
        "method": "consumed"
      }
     ]
    },
   {
 	  "id": "s7cc840a95bara1",              # A SourceMetadata object
      "resource": "infores:ARA_1",
	  "resource_role": "aggregator",	  
      "retrievals": [
      {
       "retrieved_from": "infores:KP_1",   # A RetrievalMetadata object
       "method": "query"
	  },
   	  {
       "retrieved_from": "infores:KP_2",    # A RetrievalMetadata object
       "method": "contains"
      }
     ]
    },
    {
      "id": "s32b64cc8a6ara2",              # A SourceMetadata object
	  "reource": "infores:ARA_2",
	  "resource_role": "aggregator",
      "retrievals": [
        {
         "retrieved_from": "infores:KP_1",  # A RetrievalMetadata object
         "method": "query"
        },
        {
         "retrieved_from": "infores:KP_3",  # A RetrievalMetadata object
         "method": "query"
        }
       ]
     },
     {
       "id": "s84a76abb2wr4",               # A SourceMetadata object
	   "resource": "infores:WR",
       "resource_role": "aggregator",
       "retrievals": [
        {
         "retrieved_from": "infores:ARA_1", # A RetrievalMetadata object
         "method": "query"
        },
        {
         "retrieved_from": "infores:ARA_2", # A RetrievalMetadata object
         "method": "query"
        }
       ]
     }
   }
 
 #----------------------------------------------------#
   
  ## Biolink-Based Restructuring of Abrar's Original Proposal (moves from a 2-level to a 1-level representation, using more Biolink-based semantics)
  ## Note that I think we decided the 'preceded_by' fields are not needed (which perhaps means that the hash IDs for SourceMetadata and RetrievalMetadata  are also not needed)
{
  "edges": {
    "id": "e719491"
    "subject": "RXCUI:1544384",
    "predicate": "biolink:correlated_with",
    "object": "MONDO:0008383",
    "retrievals": [
	{
      "id": "re25ac984b7kbkp1",
	  "source": "infores:KS",
	  "source_role": "original",
	  "target": "infores:KP_1",
	  "target_role": "aggregator",
	  "method": "consumed"
    },
	{
      "id": "re83bb198c8kbkp2",
	  "source": "infores:KS",
	  "source_role": "original",
	  "target": "infores:KP_2",
	  "target_role": "aggregator",
	  "method": "consumed"
    },
	{
      "id": "re75bb123a8kbkp3",
	  "source": "infores:KS",
	  "source_role": "original",
	  "target": "infores:KP_3",
	  "target_role": "aggregator",
	  "method": "consumed"
    },
	{
      "id": "re41ac943b2kp1ara1",
	  "source": "infores:KP1",
	  "source_role": "aggregator",
	  "target": "infores:ARA_1",
	  "target_role": "aggregator",
	  "method": "query",
	  "preceded_by": ["re25ac984b7kbkp1"]
    },
	{
      "id": "re82ab873a9kp2ara1",
	  "source": "infores:KP2",
	  "source_role": "aggregator",
	  "target": "infores:ARA_1",
	  "target_role": "aggregator",
	  "method": "contained",
	  "preceded_by": ["re83bb198c8kbkp2"]
    },
	{
      "id": "re47aa825c7kp1ara2",
	  "source": "infores:KP1",
	  "source_role": "aggregator",
	  "target": "infores:ARA_2",
	  "target_role": "aggregator",
	  "method": "query",
	  "preceded_by": ["re25ac984b7kbkp1"]
    },
	{
      "id": "re34bb814c6kp3ara21",
	  "source": "infores:KP3",
	  "source_role": "aggregator",
	  "target": "infores:ARA_2",
	  "target_role": "aggregator",
	  "method": "query",
	  "preceded_by": ["re75bb123a8kbkp3"]
    },
	{
      "id": "re61bb249a4ara1wr",
	  "source": "infores:ARA1",
	  "source_role": "aggregator",
	  "target": "infores:WR",
	  "target_role": "aggregator",
	  "method": "query",
	  "preceded_by": ["re41ac943b2kp1ara1", "re82ab873a9kp2ara1"]
    },
	{
      "id": "re32bb725c9ara2wr",
	  "source": "infores:ARA2",
	  "source_role": "aggregator",
	  "target": "infores:WR",
	  "target_role": "aggregator",
	  "method": "query",
	  "preceded_by": ["re47aa825c7kp1ara2", "re34bb814c6kp3ara2"]
    }

   ]
 }

 
 # -------------------------------------------------------------
 
   ## One-level representation of an expanded scenario that include a second external source / original source that KP1 pulls from.
   ## e.g. MolePro pulls the edge/association ChemX-binds-GeneY from ChemBL and StringDB. Same SPOQ semantics, but different original/primary source.  
   ## These two Edges never get merged into a single Association/Edge object (although the UI might ultimately display them as one).
   ## Only the second Edge is shown below, which would complement the Edge already shown above.
   ## This second edge is passed through KP1, ARA1 and ARA2, on its way to the WR. 
   
{
  "edges": { 
    "id": "e21aa4542"                # A different Edge gets created for the assertion originating in KS2, even though it states the same knowledge as the assertion originating in KS1 and represented in the edge above
    "subject": "RXCUI:1544384",
    "predicate": "biolink:correlated_with",
    "object": "MONDO:0008383",
    "retrievals": [
	
	{
      "id": "re52ba891b4kb2kp1",
	  "source": "infores:KS2",
	  "source_role": "original",
	  "target": "infores:KP_1",
	  "target_role": "aggregator",
	  "method": "consumed"
    },

	{
      "id": "re43ab256b7kp1ara1",    # note that the content of this object is identical to that of one in the other edge - which would give the same hashed id,  unless we include the edge id in computing the hash (which I think we should for this reason . . . we want these hash ids to be different)
	  "source": "infores:KP1",
	  "source_role": "aggregator",
	  "target": "infores:ARA_1",
	  "target_role": "aggregator",
	  "method": "query",
	  "preceded_by": ["re52ba891b4kb2kp1"]
    },

	{
      "id": "re68aa815c7kp1ara2",
	  "source": "infores:KP1",
	  "source_role": "aggregator",
	  "target": "infores:ARA_2",
	  "target_role": "aggregator",
	  "method": "query",
	  "preceded_by": ["re52ba891b4kb2kp1"]
    },
	{
      "id": "re72ba249b3ara1wr",
	  "source": "infores:ARA1",
	  "source_role": "aggregator",
	  "target": "infores:WR",
	  "target_role": "aggregator",
	  "method": "query",
	  "preceded_by": ["re43ab256b7kp1ara1"]
    },
	{
      "id": "re72bc725c7ara2wr",
	  "source": "infores:ARA2",
	  "source_role": "aggregator",
	  "target": "infores:WR",
	  "target_role": "aggregator",
	  "method": "query",
	  "preceded_by": ["re68aa815c7kp1ara2"]
    }

   ]
 }

   